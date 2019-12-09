/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EditorConfigService } from './editor-config.service';

describe('Service: EditorConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorConfigService]
    });
  });

  it('should ...', inject([EditorConfigService], (service: EditorConfigService) => {
    expect(service).toBeTruthy();
  }));
});
