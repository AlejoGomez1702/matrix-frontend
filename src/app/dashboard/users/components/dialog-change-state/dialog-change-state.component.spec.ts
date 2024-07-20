import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChangeStateComponent } from './dialog-change-state.component';

describe('DialogChangeStateComponent', () => {
  let component: DialogChangeStateComponent;
  let fixture: ComponentFixture<DialogChangeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogChangeStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogChangeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
