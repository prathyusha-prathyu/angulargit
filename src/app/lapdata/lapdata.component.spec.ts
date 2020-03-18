import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapdataComponent } from './lapdata.component';

describe('LapdataComponent', () => {
  let component: LapdataComponent;
  let fixture: ComponentFixture<LapdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
