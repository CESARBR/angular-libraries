import { TestBed } from '@angular/core/testing';

import { LibSidebarService } from './lib-sidebar.service';

describe('LibSidebarService', () => {
  let service: LibSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
