import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromPage } from './from.page';

describe('FromPage', () => {
  let component: FromPage;
  let fixture: ComponentFixture<FromPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FromPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
