import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstComponentComponent } from './myfirst-component.component';

describe('MyfirstComponentComponent', () => {
  let component: MyfirstComponentComponent;
  let fixture: ComponentFixture<MyfirstComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfirstComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
