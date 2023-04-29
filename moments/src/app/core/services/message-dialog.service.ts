import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageDialogService {
  title: string = '';
  content: string = '';
  isVisible: boolean = false;

  constructor() {}

  showDialog({ title, content }: { title: string; content: string }) {
    this.title = title;
    this.content = content;
    this.isVisible = !this.isVisible;
  }

  hideDialog() {
    this.title = '';
    this.content = '';
    this.isVisible = false;
  }
}
