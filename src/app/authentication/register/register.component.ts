import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/service/apiservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
submitted:any;

constructor(private fb:FormBuilder,private http:ApiserviceService) { }

register=this.fb.group({
          name:new FormControl('anik',[Validators.required,Validators.minLength(4)]),
          number:new FormControl('1123456789',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
          id:new FormControl('',[Validators.minLength(4),Validators.required]),
          password:new FormControl('',[Validators.minLength(4),Validators.required]),
})


ngOnInit(): void {
  }

public onSubmit(): void {
    this.submitted = true;
    if(!this.register.valid) {
      return;
    }
  }


saveData() {
          if(this.register.valid){
          this.http.saveData(this.register.value).subscribe((result:any)=>{
          console.log(result);
          alert("succesfully Registered")
          })  
          }
          else{
            alert("invalid form" )
          }
}
}
