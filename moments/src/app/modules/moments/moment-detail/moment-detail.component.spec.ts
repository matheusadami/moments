import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentDetailComponent } from './moment-detail.component';

describe('MomentDetailComponent', () => {
  let component: MomentDetailComponent;
  let fixture: ComponentFixture<MomentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
