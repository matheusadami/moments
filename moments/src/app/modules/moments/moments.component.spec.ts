import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsComponent } from './moments.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MomentsComponent', () => {
  let component: MomentsComponent;
  let fixture: ComponentFixture<MomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomentsComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
