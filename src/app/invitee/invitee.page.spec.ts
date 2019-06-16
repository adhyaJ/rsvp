import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteePage } from './invitee.page';

describe('InviteePage', () => {
  let component: InviteePage;
  let fixture: ComponentFixture<InviteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
