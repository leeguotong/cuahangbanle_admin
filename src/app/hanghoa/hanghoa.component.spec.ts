import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanghoaComponent } from './hanghoa.component';

describe('HanghoaComponent', () => {
  let component: HanghoaComponent;
  let fixture: ComponentFixture<HanghoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HanghoaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanghoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
