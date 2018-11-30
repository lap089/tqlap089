import { TestBed } from '@angular/core/testing';

import { MangaServiceService } from './manga-service.service';

describe('MangaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MangaServiceService = TestBed.get(MangaServiceService);
    expect(service).toBeTruthy();
  });
});
