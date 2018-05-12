import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenoroddComponent } from './evenorodd.component';

describe('EvenoroddComponent', () => {
  let component: EvenoroddComponent;
  let fixture: ComponentFixture<EvenoroddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenoroddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenoroddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
