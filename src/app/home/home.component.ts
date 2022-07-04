import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../service/apiservice.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
//    database:any={
//     1000:{id:1000,password:1000}
//    }
//   constructor(private router: Router, private fb: FormBuilder, private validation: ServiceService,private apiservice:ApiserviceService) { }

//   Logform = this.fb.group({
//     id: ['', [Validators.required]],
//     password: ['', [Validators.required]]
//   })

//   validationMessages = {
//     'id': {
//       'required': 'id is required.',
//     },
//     'password': {
//       'required': 'password is required.'
//     }
//   };

//   formErrors = { id: '', password: '' };


//   logValidationErrors() {
//     this.formErrors = this.validation.getValidationErrors(this.Logform, this.validationMessages);
//   }

  ngOnInit(): void {
//     this.Logform.valueChanges.subscribe(
//       value => {
//         this.logValidationErrors()
//       }
//     );
  }

//   loginform() {
//   //   console.log(this.Logform.value);
//   //   let db=this.database
//   //   console.log();
//   // console.log("ss",this.Logform.value.id);

    
   
// if( this.Logform.valid){
//   // if(password ==db[id]["password"]){

//   // }
  
//   alert("Logged successfully")
//   this.router.navigateByUrl("/list")
  
// } 
// else{
//   alert("invalid form")
//   this.logValidationErrors()
// }   // console.log(this.logValidationErrors());
//   }

}
