import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePointComponent } from './table-point.component';

describe('TablePointComponent', () => {
  let component: TablePointComponent;
  let fixture: ComponentFixture<TablePointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
