import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesStartingComponent } from './recipes-starting.component';

describe('RecipesStartingComponent', () => {
  let component: RecipesStartingComponent;
  let fixture: ComponentFixture<RecipesStartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesStartingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesStartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
