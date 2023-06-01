import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(   
  ) { }

  ngOnInit(): void {
  }

    registerForm = new FormGroup({
      firstname: new FormControl(""),
      lastname: new FormControl(""),
      Address: new FormControl(""),
      email: new FormControl(""),
      mobile: new FormControl(""),
      gender: new FormControl(""),
      pwd: new FormControl(""),
      rpwd: new FormControl(""),
      cardnumber: new FormControl(""),
      expirationdate: new FormControl(""),
      securitycode: new FormControl(""),
    });

    registerSubmited(){
      console.log(this.registerForm.value);
    }
}

