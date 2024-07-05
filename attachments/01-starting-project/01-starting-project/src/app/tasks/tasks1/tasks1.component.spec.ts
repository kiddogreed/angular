import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasks1Component } from './tasks1.component';

describe('Tasks1Component', () => {
  let component: Tasks1Component;
  let fixture: ComponentFixture<Tasks1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tasks1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tasks1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
