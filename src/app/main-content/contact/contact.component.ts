import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AosDirective } from '../../directives/custom/aos/aos.directive';
import { TranslateModule } from '@ngx-translate/core';
import { SubmitNotificationComponent } from './submit-notification/submit-notification.component';

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

  mailTest = true;

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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.submitted = true;
      setTimeout(() => this.submitted = false, 2500);
    }
  }

  setFocus(id: string) {
    document.getElementById(id)?.focus();
  }
}
