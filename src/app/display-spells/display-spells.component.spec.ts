import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySpellsComponent } from './display-spells.component';

describe('DisplaySpellsComponent', () => {
  let component: DisplaySpellsComponent;
  let fixture: ComponentFixture<DisplaySpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
