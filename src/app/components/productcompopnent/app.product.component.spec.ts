
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './app.product.component';
import { Product } from '../../models/app.product';
import { FormsModule } from '@angular/forms';
describe('ProductComponent', () => {
  // 1. component reference
  let component: ProductComponent;
  // 2. component fixture, to generate instance for code, its dependencies
  // all events triggers and databinding detectation
  let fixture: ComponentFixture<ProductComponent>;
  // 2a. define the HTML element object
  let button: HTMLElement;

  // 3. initialize the in-memory NgModule with its dependencies
  // to import standard modules
  // to define providers for injection
  beforeEach(async(() => {
      // doing same thing that NgModule does while runnin app in browser
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [FormsModule]
    })
    .compileComponents(); // <--- makes sure that all HTML and its binding is done properly
  }));

  beforeEach(() => {
    // 4. create component instance
    fixture = TestBed.createComponent(ProductComponent);
    // 5. 'component' is ready to detect all changes
    component = fixture.componentInstance;
    // 6. listen for default data binding
    fixture.detectChanges();
  });

  it('should calculate product tax on save button click', () => {
    // arrange
    // 1. get the product instance from the component
    let prd = new Product(0, '', 0, '');
    prd.Price = 3000;
    // 2. assign the prd to product member of the component
    component.product = prd;
    // 3. get the DOM element to be watched (databinding and event)
    const nativeElement = fixture.nativeElement;
    // 4. get the 'input:button' on which the 'click' event
    // is dispatched
    button = nativeElement.querySelector('.btn-success');

    // act
    // 5. dispatch the 'click' event
    const eventType = button.dispatchEvent(new Event('click'));
    // 6. detect changes in DOM after the event is dispatched
    fixture.detectChanges();

    // assert
    // 7. check if input[disabled] proeprty having the accurate value
    expect(nativeElement.querySelector('input[disabled]').value).toEqual('60');


  });

});
