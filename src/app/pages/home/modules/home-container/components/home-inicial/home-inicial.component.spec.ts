import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInicialComponent } from './home-inicial.component';

describe('HomeInicialComponent', () => {
  let component: HomeInicialComponent;
  let fixture: ComponentFixture<HomeInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
