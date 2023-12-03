import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolletosComponent } from './folletos.component';

describe('FolletosComponent', () => {
  let component: FolletosComponent;
  let fixture: ComponentFixture<FolletosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolletosComponent]
    });
    fixture = TestBed.createComponent(FolletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
