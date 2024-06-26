import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, SecurityContext, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AosDirective } from '../../directives/custom/aos/aos.directive';
import { TranslateModule } from '@ngx-translate/core';
import { SubmitNotificationComponent } from './submit-notification/submit-notification.component';
import DOMPurify  from 'dompurify';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, SubmitNotificationComponent, AosDirective, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../../styles/aos.scss'],
})
export class ContactComponent {
  
  checked : boolean = false;
  buttonDisabled: boolean = false;
  submitted : boolean = false;

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;

  post = {
    endPoint: 'https://ricardogeada.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  /**
   * onSubmit
   * @param {NgForm} ngForm 
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.sanitizeAndEscapeContactData()))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.submitted = true;
            this.buttonDisabled = false;
            setTimeout(() => this.submitted = false, 2500);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.submitted = true;
      this.buttonDisabled = false;
      setTimeout(() => this.submitted = false, 2500);
    }
  }


  /**
   * sanitize and escape contactData too prevent XSS
   * @returns sanitized and escaped contactData
   */
  sanitizeAndEscapeContactData() {
    const sanitizedMessage = DOMPurify.sanitize(this.contactData.message);
    const escapedMessage = this.escapeHtml(sanitizedMessage!);
    return {
      name: this.contactData.name,
      email: this.contactData.email,
      message: escapedMessage,
    }
  }


  /**
   * escapeHTML
   * @param text 
   * @returns 
   */
  escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
  }

  
  /**
   * set focus on element
   * @param {string} id - id of the element that should be focused
   */
  setFocus(id: string) {
    document.getElementById(id)?.focus();
  }
}
