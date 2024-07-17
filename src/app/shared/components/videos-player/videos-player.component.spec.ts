import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosPlayerComponent } from './videos-player.component';

describe('VideosPlayerComponent', () => {
  let component: VideosPlayerComponent;
  let fixture: ComponentFixture<VideosPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideosPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
