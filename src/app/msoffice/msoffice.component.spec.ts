import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsofficeComponent } from './msoffice.component';

describe('MsofficeComponent', () => {
  let component: MsofficeComponent;
  let fixture: ComponentFixture<MsofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
