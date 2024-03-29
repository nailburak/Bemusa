import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetsComponent } from './carpets.component';

describe('CarpetsComponent', () => {
  let component: CarpetsComponent;
  let fixture: ComponentFixture<CarpetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
