import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ReportLostFoundItem {
  title: any;
  reporter: any;
  category: any;
  subcategory: any;
  dateLostItem: any;
  dateFoundItem: any;
  placeLostItem: any;
  brand: any;
  model: any;
  color: any;
  reward: any;
  lost: any;
  found: any;
  returned: any;
  identifier: any;
  marking: any;
  description: any;
  date: any;
}

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item.component.html',
  styleUrls: ['./report-item.component.scss']
})
export class ReportItemComponent implements OnInit {
  showSpinner;
  public reportItem: FormGroup;
  constructor() { }

  ngOnInit() {
    this.reportItem = new FormGroup({
      title: new FormControl(),
      reporter: new FormControl(),
      category: new FormControl(),
      subcat: new FormControl(),
      datelost: new FormControl(),
      datefound: new FormControl(),
      placeLostItem: new FormControl(),
      placeFoundItem: new FormControl(),
      brand: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      reward: new FormControl(),
      lost: new FormControl(),
      found: new FormControl(),
      returned: new FormControl(),
      identifier: new FormControl(),
      markings: new FormControl(),
      description: new FormControl()
    });
  }

  public reportLostFound = (ownerFormValue) => {
    console.log('ownerFormValue', ownerFormValue);
  }

}
