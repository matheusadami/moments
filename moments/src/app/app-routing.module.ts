import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';
import { AboutComponent } from '@modules/about/about.component';
import { MomentsComponent } from '@modules/moments/moments.component';
import { MomentFeedComponent } from '@modules/moments/moment-feed/moment-feed.component';
import { MomentCreateComponent } from '@modules/moments/moment-create/moment-create.component';
import { MomentDetailComponent } from '@modules/moments/moment-detail/moment-detail.component';

const routes: Routes = [
  {
    path: '',
    title: 'Moments - Home',
    component: HomeComponent,
  },
  {
    path: 'about',
    title: 'Moments - About',
    component: AboutComponent,
  },
  {
    path: 'moments',
    component: MomentsComponent,
    title: 'Moments - Your Feed',
    children: [
      {
        path: '',
        component: MomentFeedComponent,
      },
      {
        path: 'create',
        component: MomentCreateComponent,
        title: 'Moments - Create',
      },
      {
        path: ':id',
        component: MomentDetailComponent,
        title: 'Moments - Detail',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
