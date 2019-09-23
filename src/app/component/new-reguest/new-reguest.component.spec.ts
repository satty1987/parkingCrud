import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReguestComponent } from './new-reguest.component';

describe('NewReguestComponent', () => {
  let component: NewReguestComponent;
  let fixture: ComponentFixture<NewReguestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReguestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
