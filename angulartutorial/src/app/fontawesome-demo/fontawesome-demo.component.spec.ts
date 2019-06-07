import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontawesomeDemoComponent } from './fontawesome-demo.component';

describe('FontawesomeDemoComponent', () => {
  let component: FontawesomeDemoComponent;
  let fixture: ComponentFixture<FontawesomeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontawesomeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontawesomeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
