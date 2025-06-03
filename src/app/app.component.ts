import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform: FormGroup;

  constructor(private fb:FormBuilder){
    this.myform = this.fb.group({
   name:['',[Validators.required]],
   email:['',[Validators.email,Validators.required]],
   password:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
   confirmpassword:['',[Validators.required,]],
   acceptterm:['',[Validators.requiredTrue]]
    });
  }

  onSubmit(){
    if(this.myform.valid){
      this.myform.value;
    }
  }
}
