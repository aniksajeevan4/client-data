import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-dash-add',
  templateUrl: './dash-add.component.html',
  styleUrls: ['./dash-add.component.css']
})
export class DashAddComponent implements OnInit {
  submitted: any;
  constructor(private validation:ServiceService,private fb:FormBuilder,private api:ApiserviceService) { }
  collection:any={};

  Addform = this.fb.group({
    title: ['', Validators.required],
    firstname: ['', Validators.required],
    middlename: ['', Validators.required],
    lastname: ['', Validators.required],
    age: ['', Validators.required], 
    caddress:['',Validators.required],
    ccity:['',Validators.required],
    cdistrict:['',Validators.required],
    cstate:['',Validators.required],
    ccountry:['',Validators.required],
    cpin:['',Validators.required],
    paddress:['',Validators.required],
    pcity:['',Validators.required],
    pdistrict:['',Validators.required],
    pstate:['',Validators.required],
    pcountry:['',Validators.required],
    ppin:['',Validators.required],
    occupation:['',Validators.required],
    experience:['',Validators.required],
    idproof:['',Validators.required],
    idnumber:['',Validators.required],
    addrerssproof:['',Validators.required],
    details:['',Validators.required],
})


validationMessages = {
      'title': {'required': 'title required.'},
      'firstname': {'required': 'firstname is required.' },
      'middlename':{'required' :'middlename required'},
      'lastname':{'required' :'lastname required' },
      'age': {'required': 'age is required.' },
      'caddress': {'required': 'address is required.' },
      'ccity': {'required': 'city is required.' },
      'cdistrict': {'required': 'district is required.' },
      'cstate': {'required': 'state is required.' },
      'ccountry': {'required': 'country is required.' },
      'cpin': {'required': 'pincode is required.' },
      'paddress': {'required': 'address is required.' },
      'pcity': {'required': 'city is required.'},
      'pdistrict': {'required': 'district is required.' },
      'pstate': {'required': 'state is required.' },
      'pcountry': {'required': 'country is required.' },
      'ppin': {'required': 'pincode is required.' },
      'occupation': { 'required': 'occupation is required.' },
      'experience': {'required': 'experience is required.' },
      'idproof': { 'required': 'experience is required.' },
      'idnumber': {'required': 'id is required.' },
      'addrerssproof': {'required': 'proof is required.'},
      'details': {'required': 'details is required.' }
}

  formErrors={ title: '', firstname: '',middlename: '',lastname:'',age: '',caddress: '', ccity:'',cdistrict: '', cstate: '', 
                ccountry:'',cpin: '',paddress: '', pcity:'',pdistrict: '', pstate: '', 
                pcountry:'',ppin: '', occupation:'',experience: '',idproof:'' , idnumber:'',addrerssproof:'' ,details:''};


logValidationErrors() {
                  this.formErrors = this.validation.getValidationErrors(this.Addform, this.validationMessages)   
                           }
     
ngOnInit(): void {
  this.Addform.valueChanges.subscribe(
    value => {
    this.logValidationErrors()
             });
          }
    add(){
      //  this.api.addData(this.Addform.value).subscribe((result)=>{
      //   console.log(result);
      //       })
      //     this.logValidationErrors()
    }
    public onSubmit(): void {
      this.submitted = true;
      if(!this.Addform.valid) {
        return;
      }
    }
}
