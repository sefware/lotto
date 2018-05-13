import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultT2Component } from './resultT2.component';

describe('Result3rowDivComponent', () => {
  let component: ResultT2Component;
  let fixture: ComponentFixture<ResultT2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultT2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultT2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
