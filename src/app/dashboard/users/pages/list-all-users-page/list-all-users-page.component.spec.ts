import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllUsersPageComponent } from './list-all-users-page.component';

describe('ListAllUsersPageComponent', () => {
  let component: ListAllUsersPageComponent;
  let fixture: ComponentFixture<ListAllUsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllUsersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
