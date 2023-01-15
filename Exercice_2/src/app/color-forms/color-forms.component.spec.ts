import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFormsComponent } from './color-forms.component';

describe('ColorFormsComponent', () => {
  let component: ColorFormsComponent;
  let fixture: ComponentFixture<ColorFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
