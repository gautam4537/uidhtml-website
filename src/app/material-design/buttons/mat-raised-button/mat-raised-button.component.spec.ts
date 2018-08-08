import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatRaisedButtonComponent } from './mat-raised-button.component';

describe('MatRaisedButtonComponent', () => {
  let component: MatRaisedButtonComponent;
  let fixture: ComponentFixture<MatRaisedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatRaisedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatRaisedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
