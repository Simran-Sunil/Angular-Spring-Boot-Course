import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Simran", "Sunil", "simran@gmail.com", 60000),
    new SalesPerson("Sonal", "Sunil", "sonal@gmail.com", 65000),
    new SalesPerson("Ravi", "Kumar", "ravi@gmail.com", 45000),
    new SalesPerson("Sohail", "Shetty", "sahil@gmail.com", 25000),
    new SalesPerson("Hema", "Rao", "hema@gmail.com", 50000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
