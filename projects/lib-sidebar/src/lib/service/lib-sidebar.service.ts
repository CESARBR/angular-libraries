import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LibSidebarService {

  private sidebars: any[] = [];

  constructor() { }  

  public add(sidebar: any): boolean {
    if (!sidebar) return false;
    
    // adding the new sidebar in the sidebars' list
    this.sidebars.push(sidebar);
    return true;
  }

  public remove(id: string): boolean {
    if (!id) return false;

    // removing the sidebar from the sidebars' list
    this.sidebars = this.sidebars.filter(sidebar => sidebar.id !== id);
    return true;
  }

  public open(id: string) {
    const sidebar: any = this.findSidebarById(id);
    if (!sidebar) return false;

    if (sidebar.isSingleOpen) this.closeAll();
    sidebar.open();
    return true;
  }

  public close(id: string) {
    const sidebar: any = this.findSidebarById(id);
    
    if (sidebar) {
      sidebar.close();
    }
  }

  public closeAll(exceptionId?: string) {
    this.sidebars.map(sidebar => {
      if (sidebar.isOpened && (!exceptionId || sidebar.id !== exceptionId)) {
        sidebar.close();
      }
    });
  }

  public clear() {
    this.sidebars = [];
  }

  private findSidebarById(id: string): any {
    return this.sidebars.find(sidebar => sidebar.id === id);
  }
}
