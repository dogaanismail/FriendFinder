/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShareGifComponent } from './share-gif.component';

describe('ShareGifComponent', () => {
  let component: ShareGifComponent;
  let fixture: ComponentFixture<ShareGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
