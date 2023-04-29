import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageDialogService } from '@core/services/message-dialog.service';
import { MomentService } from '@core/services/moment.service';
import { MomentForm } from '@modules/moments/shared/interfaces/moment-form.interface';

@Component({
  selector: 'app-moment-create',
  templateUrl: './moment-create.component.html',
  styleUrls: ['./moment-create.component.scss'],
})
export class MomentCreateComponent {
  constructor(
    private momentService: MomentService,
    private momentDialogSevice: MessageDialogService,
    private router: Router
  ) {}

  async onSubmitForm(momentForm: MomentForm) {
    const formData = new FormData();
    formData.append('title', momentForm.title);
    formData.append('description', momentForm.description);
    formData.append('image', momentForm.image);

    await this.momentService.create(formData);

    this.momentDialogSevice.showDialog({
      title: 'Success',
      content: 'Moment successfully created',
    });

    this.router.navigate(['/']);
  }
}
