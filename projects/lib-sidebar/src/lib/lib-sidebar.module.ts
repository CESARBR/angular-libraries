import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibSidebarComponent } from './components/lib-sidebar.component';

@NgModule({
  declarations: [LibSidebarComponent],
  imports: [CommonModule],
  exports: [LibSidebarComponent],
  providers: []
})
export class LibSidebarModule { }
