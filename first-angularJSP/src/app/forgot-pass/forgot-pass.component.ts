import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  forgotPassForm!: FormGroup;
  constructor(public router: Router) { }

  ngOnInit() {
    this.forgotPassForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]  ),
      // password: new FormControl(null, [Validators.required, Validators.minLength(5)] ), 
    })
  }
  submit(){
    if(this.forgotPassForm.valid){
      const forgotPassFormData = this.forgotPassForm.value;

      console.log('forgotPassFormData = this.forgotPassForm.value:' ,forgotPassFormData)
      
      this.forgotPassForm.reset()
    }
  }

  goToLogInPage(){
       this.router.navigate(['/log-in']);
  }

}
