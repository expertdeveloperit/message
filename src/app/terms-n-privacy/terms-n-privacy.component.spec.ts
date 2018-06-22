import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNPrivacyComponent } from './terms-n-privacy.component';

describe('TermsNPrivacyComponent', () => {
  let component: TermsNPrivacyComponent;
  let fixture: ComponentFixture<TermsNPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
