import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSidebarComponent } from './lib-sidebar.component';

describe('LibSidebarComponent', () => {
  let component: LibSidebarComponent;
  let fixture: ComponentFixture<LibSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
