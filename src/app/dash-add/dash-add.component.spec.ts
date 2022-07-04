import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAddComponent } from './dash-add.component';

describe('DashAddComponent', () => {
  let component: DashAddComponent;
  let fixture: ComponentFixture<DashAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
