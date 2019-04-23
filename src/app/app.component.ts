import { Component, Input, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


export class MenuListComponent {

  @ContentChild(TemplateRef) contentTemplateRef: TemplateRef<any>;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  text: string;

  results: string[]

  constructor(private fb: FormBuilder) {

  }

  search(event) {
    this.results = ['aashish', 'ajay', 'Rama', 'Pidi'];
  }

  cars: any[];
  cols: any;
  childCols: any;

  expandedRows: {} = {};

  ngOnInit() {
    
    this.cols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];

    this.childCols = [
        { field: '1', header: 'Col 1' },
        { field: '2', header: 'Col 2' },
        { field: '3', header: 'Col 3' },
        { field: '4', header: 'Col 4' }
    ];
    
    this.cars =[
        {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr", "child": [{"1": "21", "2": "22", "3": "23"}]},
        {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5", "child": [{"1": "1", "2": "2", "3": "3"}]},
        {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s", "child": [{"1": "1", "2": "2", "3": "3"}]}
    ];
    
    const thisRef = this;
    this.cars.forEach(function(car) {
      if(car.childCols.length > 0)
      console.log(car.vin)
      thisRef.expandedRows[car.vin] = 1;
    });

  }

}
