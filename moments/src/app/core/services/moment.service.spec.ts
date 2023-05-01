import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { MomentService } from './moment.service';

import { ApiResponse } from '@core/models/api-response.model';
import { Moment } from '@core/models/moment.model';

const mockMomentRegister: Moment = {
  id: 1,
  title: 'Foo',
  description: 'Bar',
  image: 'image.png',
  createdAt: '2023-01-01 01:00:00',
};

describe('MomentService', () => {
  let service: MomentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MomentService],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(MomentService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an ApiResponse<Moment[]> type', () => {
    const mockResponse: ApiResponse<Moment[]> = {
      data: [mockMomentRegister],
      message: 'Foo',
    };

    service.getMoments().then((response) => {
      expect('data' in response).toBeTrue();
      expect('message' in response).toBeTrue();
      expect(response.data?.length).toBe(1);
    });

    const request = httpTestingController.expectOne(service.apiUrl);
    expect(request.request.method).toBe('GET');

    request.flush(mockResponse);
  });

  it(`'createdAt' should be a valid value (returned from API)`, () => {
    const mockResponse: ApiResponse<Moment[]> = {
      data: [mockMomentRegister],
      message: 'Bar',
    };

    service.getMoments().then((response) => {
      const moment = response.data![0];
      expect(moment.createdAt).toBe('01/01/2023');
    });

    const request = httpTestingController.expectOne(service.apiUrl);
    expect(request.request.method).toBe('GET');

    request.flush(mockResponse);
  });

  it('should not allow to create a moment using image as string type', () => {
    const mockFormData = new FormData();
    mockFormData.append('title', 'Foo');
    mockFormData.append('description', 'Bar');
    mockFormData.append('image', 'image.png');

    service
      .create(mockFormData)
      .then((reponse) => {
        fail('expect an error, not a created moment');
      })
      .catch((error: Error) => {
        expect(error.message).toContain('image must be a File instance');
      });

    httpTestingController.expectNone(service.apiUrl);
  });
});
