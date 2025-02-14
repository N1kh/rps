import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComComponent } from './main-com.component';

describe('MainComComponent', () => {
  let component: MainComComponent;
  let fixture: ComponentFixture<MainComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
