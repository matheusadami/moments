import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MessageDialogComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, MessageDialogComponent],
})
export class SharedModule {}
