import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-dragndrop';
  files: Array<any> = [];

  public listFiles(fileList: any) {
    this.files = fileList;
  }
}
