import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngJsoneditorComponent } from './ang-jsoneditor.component';

describe('AngJsoneditorComponent', () => {
  let component: AngJsoneditorComponent;
  let fixture: ComponentFixture<AngJsoneditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngJsoneditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngJsoneditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
