
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponentComponent } from './sample-component.component';

describe('SampleComponentComponent', () => {
  // 1. component reference
  let component: SampleComponentComponent;
  // 2. component fixture, to generate instance for code, its dependencies
  // all events triggers and databinding detectation
  let fixture: ComponentFixture<SampleComponentComponent>;

  // 3. initialize the in-memory NgModule with its dependencies
  // to import standard modules
  // to define providers for injection
  beforeEach(async(() => {
      // doing same thing that NgModule does while runnin app in browser
    TestBed.configureTestingModule({
      declarations: [ SampleComponentComponent ]
    })
    .compileComponents(); // <--- makes sure that all HTML and its binding is done properly
  }));

  beforeEach(() => {
    // 4. create component instance
    fixture = TestBed.createComponent(SampleComponentComponent);
    // 5. 'component' is ready to detect all changes
    component = fixture.componentInstance;
    // 6. listen for default data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add to numbers', () => {
      // arrange
      const x = 10;
      const y = 20;
      let expected = 30;
      // act
      let actual = component.add(x,y);
      // assert test
      expect(expected).toEqual(actual);
  })
});
