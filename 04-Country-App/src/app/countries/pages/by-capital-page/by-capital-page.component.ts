import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {


  searchBycapital(term: any): void {
    console.log('Desde Bycapital');
    console.log({ term });
  }
}
