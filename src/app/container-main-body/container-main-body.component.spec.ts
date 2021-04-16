import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMainBodyComponent } from './container-main-body.component';

describe('ContainerMainBodyComponent', () => {
  let component: ContainerMainBodyComponent;
  let fixture: ComponentFixture<ContainerMainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMainBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
