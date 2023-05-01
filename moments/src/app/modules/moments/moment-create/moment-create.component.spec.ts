import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentCreateComponent } from './moment-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MomentFormComponent } from '@modules/moments/shared/components/moment-form/moment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('MomentCreateComponent', () => {
  let component: MomentCreateComponent;
  let fixture: ComponentFixture<MomentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomentCreateComponent, MomentFormComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MomentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
