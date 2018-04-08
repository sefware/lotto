import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTComponent } from './resultT.component';

describe('ResultT3Component', () => {
  let component: ResultTComponent;
  let fixture: ComponentFixture<ResultTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
