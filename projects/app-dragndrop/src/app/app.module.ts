import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDragndropInput } from 'projects/lib-dragndrop/src/public-api';
import { ButtonWithDropComponent } from './components/button-with-drop/button-with-drop.component';
import { FileListComponent } from './components/file-list/file-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonWithDropComponent,
    FileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgDragndropInput
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
