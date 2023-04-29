import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentFeedComponent } from './moment-feed.component';

describe('MomentFeedComponent', () => {
  let component: MomentFeedComponent;
  let fixture: ComponentFixture<MomentFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
