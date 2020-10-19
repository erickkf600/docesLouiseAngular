import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCakesComponent } from './our-cakes.component';

describe('OurCakesComponent', () => {
  let component: OurCakesComponent;
  let fixture: ComponentFixture<OurCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
