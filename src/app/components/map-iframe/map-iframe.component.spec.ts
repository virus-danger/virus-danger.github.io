import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIframeComponent } from './map-iframe.component';

describe('MapIframeComponent', () => {
  let component: MapIframeComponent;
  let fixture: ComponentFixture<MapIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapIframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
