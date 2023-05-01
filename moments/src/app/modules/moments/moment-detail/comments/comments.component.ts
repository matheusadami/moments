import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from '@core/models/comment.model';

import { Moment } from '@core/models/moment.model';
import { CommentService } from '@core/services/comment.service';
import { MessageDialogService } from '@core/services/message-dialog.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() moment?: Moment;

  momentComments: Comment[] = [];
  commentForm!: FormGroup;

  constructor(
    private commentService: CommentService,
    private messageDialogService: MessageDialogService
  ) {}

  ngOnInit(): void {
    this.momentComments = Array.from(this.moment?.comments ?? []);

    this.commentForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text');
  }

  get username() {
    return this.commentForm.get('username');
  }

  async submitForm() {
    if (this.commentForm.invalid) return;

    var newComment: Comment = {
      ...this.commentForm.value,
      momentId: this.moment?.id,
    };

    await this.commentService.create(newComment);

    this.momentComments.push(newComment);

    this.commentForm.patchValue({ text: '', username: '' });

    this.messageDialogService.showDialog({
      title: 'Success',
      content: 'Comment successfully posted',
    });
  }
}
