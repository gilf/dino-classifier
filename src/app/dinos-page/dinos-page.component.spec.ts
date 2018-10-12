import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosPageComponent } from './dinos-page.component';

describe('DinosPageComponent', () => {
  let component: DinosPageComponent;
  let fixture: ComponentFixture<DinosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DinosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
