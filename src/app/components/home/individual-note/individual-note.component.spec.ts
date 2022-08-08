import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNoteComponent } from './individual-note.component';

describe('IndividualNoteComponent', () => {
  let component: IndividualNoteComponent;
  let fixture: ComponentFixture<IndividualNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
