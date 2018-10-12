import { TestBed, inject } from '@angular/core/testing';

import { DinoDataService } from './dino-data.service';

describe('DinoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DinoDataService]
    });
  });

  it('should be created', inject([DinoDataService], (service: DinoDataService) => {
    expect(service).toBeTruthy();
  }));
});
