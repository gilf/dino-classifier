import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoPageComponent } from './dino-page.component';

describe('DinoPageComponent', () => {
  let component: DinoPageComponent;
  let fixture: ComponentFixture<DinoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
