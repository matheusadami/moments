import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';

import { MomentDetailComponent } from './moment-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentService } from '@core/services/moment.service';
import { ApiResponse } from '@core/models/api-response.model';
import { Moment } from '@core/models/moment.model';

const mockMomentRegister: Moment = {
  id: 1,
  title: 'Foo',
  description: 'Bar',
  image: 'image.png',
  createdAt: '2023-01-01 01:00:00',
};

describe('MomentDetailComponent', () => {
  let component: MomentDetailComponent;
  let fixture: ComponentFixture<MomentDetailComponent>;
  let momentServiceStub: Partial<MomentService>;

  beforeEach(async () => {
    momentServiceStub = {
      getMomentById: async (id?: number): Promise<ApiResponse<Moment>> => {
        const response: ApiResponse<Moment> = {
          data: mockMomentRegister,
        };
        return Promise.resolve(response);
      },
    };

    await TestBed.configureTestingModule({
      declarations: [MomentDetailComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: MomentService, useValue: momentServiceStub },
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('base api url should not be empty', () => {
    expect(component.baseApiUrl).toBeTruthy();
  });

  it(`'getMomentById' should be called once inside 'ngOnInit'`, () => {
    spyOn(component, 'getMomentById');
    component.ngOnInit();
    expect(component.getMomentById).toHaveBeenCalledTimes(1);
  });
});
