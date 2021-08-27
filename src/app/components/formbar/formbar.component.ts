import { Component, OnInit } from '@angular/core';
import { BackendfarmerService } from 'src/app/services/backendfarmer.service';


@Component({
  selector: 'app-formbar',
  templateUrl: './formbar.component.html',
  styleUrls: ['./formbar.component.css']
})
export class FormbarComponent implements OnInit {

  data={
    id: "",
    name: "",
    address: "",
    mobileNumber: "",
    farmingArea: "",
    cropsRate: ""
  }

  constructor(private records:BackendfarmerService) { }

  ngOnInit(): void {
  }

  doSubmitForm()
  {
    console.log("Try to submit form");
    console.log("Data",this.data);
    this.records.sendRecord(this.data).subscribe(
      response=>{
        console.log(response);
  },
error=>{
    console.log(error);
  }
    )

  }
}
