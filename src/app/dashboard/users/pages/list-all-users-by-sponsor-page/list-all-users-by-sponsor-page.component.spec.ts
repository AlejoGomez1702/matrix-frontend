import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllUsersBySponsorPageComponent } from './list-all-users-by-sponsor-page.component';

describe('ListAllUsersBySponsorPageComponent', () => {
  let component: ListAllUsersBySponsorPageComponent;
  let fixture: ComponentFixture<ListAllUsersBySponsorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllUsersBySponsorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllUsersBySponsorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
