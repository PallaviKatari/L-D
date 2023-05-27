import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDetailsComponent } from './shadow-details.component';

describe('ShadowDetailsComponent', () => {
  let component: ShadowDetailsComponent;
  let fixture: ComponentFixture<ShadowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
