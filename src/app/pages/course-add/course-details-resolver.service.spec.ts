import { TestBed } from '@angular/core/testing';

import { CourseDetailsResolverService } from './course-details-resolver.service';

describe('CourseDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseDetailsResolverService = TestBed.get(CourseDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
