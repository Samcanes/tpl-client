import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCountersComponent } from './home-counters.component';

describe('HomeCountersComponent', () => {
  let component: HomeCountersComponent;
  let fixture: ComponentFixture<HomeCountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCountersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
