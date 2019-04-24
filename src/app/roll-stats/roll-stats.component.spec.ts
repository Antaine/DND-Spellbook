import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollStatsComponent } from './roll-stats.component';

describe('RollStatsComponent', () => {
  let component: RollStatsComponent;
  let fixture: ComponentFixture<RollStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
