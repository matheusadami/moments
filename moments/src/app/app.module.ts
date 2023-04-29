import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from '@shared/shared.module';
import { AboutModule } from '@modules/about/about.module';
import { RouterModule } from '@angular/router';
import { MomentsModule } from '@modules/moments/moments.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    HomeModule,
    AboutModule,
    MomentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
