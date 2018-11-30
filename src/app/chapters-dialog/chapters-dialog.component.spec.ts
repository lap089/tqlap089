import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersDialogComponent } from './chapters-dialog.component';

describe('ChaptersDialogComponent', () => {
  let component: ChaptersDialogComponent;
  let fixture: ComponentFixture<ChaptersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaptersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
