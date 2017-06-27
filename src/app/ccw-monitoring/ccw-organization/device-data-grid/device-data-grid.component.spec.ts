import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDataGridComponent } from './device-data-grid.component';

describe('DeviceDataGridComponent', () => {
  let component: DeviceDataGridComponent;
  let fixture: ComponentFixture<DeviceDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
