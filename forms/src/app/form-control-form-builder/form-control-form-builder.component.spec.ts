import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlFormBuilderComponent } from './form-control-form-builder.component';

describe('FormControlFormBuilderComponent', () => {
  let component: FormControlFormBuilderComponent;
  let fixture: ComponentFixture<FormControlFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
