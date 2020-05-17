import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/app.coomunication.service';

@Component({
  selector: 'app-search-component',
  template: `
  <div class="container">
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        name="search"
        placeholder="Search By Product Name or Category"
        [(ngModel)]="searchText"
        (input)="emitSearchValue()"
      />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">Search</span>
      </div>
    </div>
    </div>
  `,
})
export class SearchComponent implements OnInit {
  searchText:string;
  constructor(private serv: CommunicationService) {
    this.searchText = '';
  }

  ngOnInit() {}

  emitSearchValue(): void {
    //console.log(this.searchText);
    this.serv.onEmitSearch(this.searchText);
  }
}
