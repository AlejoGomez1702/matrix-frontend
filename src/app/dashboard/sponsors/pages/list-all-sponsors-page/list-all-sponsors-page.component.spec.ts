import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllSponsorsPageComponent } from './list-all-sponsors-page.component';

describe('ListAllSponsorsPageComponent', () => {
  let component: ListAllSponsorsPageComponent;
  let fixture: ComponentFixture<ListAllSponsorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAllSponsorsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllSponsorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
