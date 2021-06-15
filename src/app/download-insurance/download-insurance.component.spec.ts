import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadInsuranceComponent } from './download-insurance.component';

describe('DownloadInsuranceComponent', () => {
  let component: DownloadInsuranceComponent;
  let fixture: ComponentFixture<DownloadInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
