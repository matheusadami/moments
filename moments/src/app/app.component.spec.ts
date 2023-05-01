import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { MomentsModule } from '@modules/moments/moments.module';
import { AboutModule } from '@modules/about/about.module';
import { HomeModule } from '@modules/home/home.module';
import { SharedModule } from '@shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule,
        HomeModule,
        AboutModule,
        MomentsModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a 'app' element`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    var compiled = fixture.nativeElement as HTMLElement;
    var appElement = compiled.querySelector('div[id="app"]');
    expect(appElement).not.toBeNull();
  });

  it(`should have a 'main' tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    var mainTag = compiled.querySelector('div[id="app"] > main');
    expect(mainTag).not.toBeNull();
  });
});
