import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerItemsCardsComponent } from './container-items-cards.component';

describe('ContainerItemsCardsComponent', () => {
  let component: ContainerItemsCardsComponent;
  let fixture: ComponentFixture<ContainerItemsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerItemsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerItemsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
