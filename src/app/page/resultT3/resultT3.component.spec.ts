import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultT3Component } from './resultT3.component';

describe('ResultT3Component', () => {
  let component: ResultT3Component;
  let fixture: ComponentFixture<ResultT3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultT3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
