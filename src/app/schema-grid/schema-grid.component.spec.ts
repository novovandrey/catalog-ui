import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaGridComponent } from './schema-grid.component';

describe('DatasetInfoComponent', () => {
  let component: SchemaGridComponent;
  let fixture: ComponentFixture<SchemaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
