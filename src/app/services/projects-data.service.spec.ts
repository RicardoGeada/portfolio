import { TestBed } from '@angular/core/testing';

import { ProjectsDataService } from './projects-data.service';

describe('ProjectsService', () => {
  let service: ProjectsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
