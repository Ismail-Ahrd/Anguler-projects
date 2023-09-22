import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDetaiPageComponent } from './listing-detai-page.component';

describe('ListingDetaiPageComponent', () => {
  let component: ListingDetaiPageComponent;
  let fixture: ComponentFixture<ListingDetaiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingDetaiPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDetaiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
