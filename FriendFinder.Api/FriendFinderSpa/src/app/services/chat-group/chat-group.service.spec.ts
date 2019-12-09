/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatGroupService } from './chat-group.service';

describe('Service: ChatGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatGroupService]
    });
  });

  it('should ...', inject([ChatGroupService], (service: ChatGroupService) => {
    expect(service).toBeTruthy();
  }));
});
