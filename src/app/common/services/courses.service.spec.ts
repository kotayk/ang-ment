import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('CoursesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
