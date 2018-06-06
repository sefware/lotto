import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Result3rowDivComponent } from './result3rowDiv.component';

describe('Result3rowDivComponent', () => {
  let component: Result3rowDivComponent;
  let fixture: ComponentFixture<Result3rowDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Result3rowDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Result3rowDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
