import { TestBed, getTestBed } from '@angular/core/testing';
// HttpClientTestingModule --> load the HttpClient dependency and resolve it
// in test case
// HttpTestingController -->  manage the http mock
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './app.htttp.service';
import { ProductData } from '../models/app.product';
// mock data for testing
const dummyProductsResponse: Array<ProductData> =
   [
      // {
      //     ProductRowId: 2,
      //     ProductId: "PR002",
      //     ProductName: "router",
      //     Manufacturer: "IBM",
      //     CategoryName: "Electronics",
      //     Description: "internet device",
      //     BasePrice: 3500
      // },
      // {
      //     ProductRowId: 5,
      //     ProductId: "101",
      //     ProductName: "n",
      //     Manufacturer: "Bajaj",
      //     CategoryName: "Electronics",
      //     Description: "hhh",
      //     BasePrice: 10
      // },
      // {
      //     ProductRowId: 6,
      //     ProductId: "101",
      //     ProductName: "n",
      //     Manufacturer: "Bajaj",
      //     CategoryName: "Electronics",
      //     Description: "hhh",
      //     BasePrice: 10
      // },
      // {
      //     ProductRowId: 7,
      //     ProductId: "102",
      //     ProductName: "Iron",
      //     Manufacturer: "Bajaj",
      //     CategoryName: "Electronics",
      //     Description: "xyz",
      //     BasePrice: 25000
      // }
  ];


const dummyProductDetails ={
  data: {
    ProductRowId: 2,
    ProductId: "PR002",
    ProductName: "router",
    Manufacturer: "IBM",
    CategoryName: "Electronics",
    Description: "internet device",
    BasePrice: 3500
 }
};

describe('HttpService', () => {
  let injector: TestBed;
  let service : HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });

    // testing configuration for NgModule
    // provide the DI container registered object (HttpService)
    // provide all dependency resolvers e.g. HttpClient object
    injector = getTestBed();
    // resolve the HttpService and provide its instace
    service = injector.get(HttpService);
    // resolve the HttpClient and provide its instance to make calls
    httpMock = injector.get(HttpTestingController);
  });

  // verification of the Mock
  afterEach(() => {
    httpMock.verify();
  });

  it('get() should return products data', () => {
    // the actula method call from the service
    // act
    service.get().subscribe((res) => {
      expect(res).toEqual(dummyProductsResponse);
    });
    // mock the calls to the external service
    // act
    const req = httpMock.expectOne('https://apiapptrainingnewapp.azurewebsites.net/api/Products');
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductsResponse);
  });

  it('post() should POST and return data', () => {
    const prd = new ProductData(0, 'Prd1001', 'Router', 'Electronics',
     'HP', '1000GBPS', 100000);
    service.post(prd).subscribe((res) => {
      prd.ProductRowId  = 7;
      expect(res).toEqual(prd);
    });

    const req = httpMock.expectOne('https://apiapptrainingnewapp.azurewebsites.net/api/Products');
    expect(req.request.method).toBe('POST');
    req.flush(prd);
  });

});
