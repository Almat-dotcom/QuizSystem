import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcardsComponent } from './quizcards.component';

describe('QuizcardsComponent', () => {
  let component: QuizcardsComponent;
  let fixture: ComponentFixture<QuizcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
