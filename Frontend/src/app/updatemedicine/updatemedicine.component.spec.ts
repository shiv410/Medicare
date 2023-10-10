import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicineComponent } from './updatemedicine.component';

describe('UpdatemedicineComponent', () => {
  let component: UpdatemedicineComponent;
  let fixture: ComponentFixture<UpdatemedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatemedicineComponent]
    });
    fixture = TestBed.createComponent(UpdatemedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
