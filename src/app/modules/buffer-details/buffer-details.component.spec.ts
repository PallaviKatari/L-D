import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferDetailsComponent } from './buffer-details.component';

describe('BufferDetailsComponent', () => {
  let component: BufferDetailsComponent;
  let fixture: ComponentFixture<BufferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
