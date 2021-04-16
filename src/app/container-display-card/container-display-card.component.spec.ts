import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDisplayCardComponent } from './container-display-card.component';

describe('ContainerDisplayCardComponent', () => {
  let component: ContainerDisplayCardComponent;
  let fixture: ComponentFixture<ContainerDisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDisplayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
