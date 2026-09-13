import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCasePage } from './new-case.page';

describe('NewCasePage', () => {
  let component: NewCasePage;
  let fixture: ComponentFixture<NewCasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
