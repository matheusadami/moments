import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MomentsComponent } from './moments.component';
import { MomentCreateComponent } from '@modules/moments/moment-create/moment-create.component';
import { MomentFeedComponent } from '@modules/moments/moment-feed/moment-feed.component';
import { MomentFormComponent } from '@modules/moments/shared/components/moment-form/moment-form.component';
import { MomentDetailComponent } from './moment-detail/moment-detail.component';
import { CommentsComponent } from './moment-detail/comments/comments.component';

@NgModule({
  declarations: [
    MomentsComponent,
    MomentCreateComponent,
    MomentFeedComponent,
    MomentFormComponent,
    MomentDetailComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MomentsModule {}
