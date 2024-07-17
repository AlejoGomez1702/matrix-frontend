import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryVideosComponent } from './galery-videos.component';

describe('GaleryVideosComponent', () => {
  let component: GaleryVideosComponent;
  let fixture: ComponentFixture<GaleryVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleryVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
