import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigueComponent } from './migue.component';

describe('MigueComponent', () => {
  let component: MigueComponent;
  let fixture: ComponentFixture<MigueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
