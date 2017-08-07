import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SofaSetComponent } from './sofa-set.component';

describe('SofaSetComponent', () => {
  let component: SofaSetComponent;
  let fixture: ComponentFixture<SofaSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofaSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofaSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
