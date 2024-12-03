import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificFoodComponent } from './specific-food.component';

describe('SpecificFoodComponent', () => {
  let component: SpecificFoodComponent;
  let fixture: ComponentFixture<SpecificFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
