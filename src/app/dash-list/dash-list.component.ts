import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Collection } from '../service/collection';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css']
})
export class DashListComponent implements OnInit {
       showAdd!:boolean;
       showEdit!:boolean;
      isDirty: any;
      username:any
      searchValue:any
      submitted: any;
      

constructor(private api:ApiserviceService,private route:Router,private router:ActivatedRoute,private fb:FormBuilder, private validation: ServiceService) { }
        collection:any=[];
        id:any;
        idd:any;

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

formErrors={ title:'',firstname: '',middlename:'',lastname:'',age: '',caddress: '', ccity:'',cdistrict: '', cstate: '', 
              ccountry:'',cpin: '',paddress: '', pcity:'',pdistrict: '', pstate: '', pcountry:'',ppin: '',occupation:'',experience: '',
              idproof:'',idnumber:'',addrerssproof:'',details:'',isChecked:''
          }

logValidationErrors() {
             this.formErrors = this.validation.getValidationErrors(this.Addform, this.validationMessages)   
                      }

ngOnInit(): void {
             this.Addform.valueChanges.subscribe(
             value => {
             this.logValidationErrors()
                      });
            this.getAllEmployee();
            this.username=sessionStorage.getItem("username")
            console.log("username",this.username);
            

             //get method
           
        }
getAllEmployee(){
  this.api.getList().subscribe((result:any)=>{
    console.log("data",result);
    this.collection=result.Table;
    console.log("d",this.collection);
   })
}

clickShow(){
            this.Addform.reset()
            this.showAdd=true;
            this.showEdit=false;
           }
public onSubmit(): void {
            this.submitted = true;
            if(!this.Addform.valid) {
            return;
            }
}
            
add(){
           if(this.Addform.valid){
                this.api.addData(this.Addform.value).subscribe((result)=>{
                console.log(result);
                })
                alert("added succesfully")
                this.Addform.reset();
                let ref=document.getElementById("cancel")
                ref?.click();
                this.getAllEmployee();

           }
           else{
              alert("invalid form")
               }
     }

edit(data:any){
              this.showAdd=false;
              this.showEdit=true;
              this.id=data.customerid
              console.log(this.id);
              this.Addform.controls['title'].setValue(data.title)
              this.Addform.controls['firstname'].setValue(data.firstname)
              this.Addform.controls['middlename'].setValue(data.middlename)
              this.Addform.controls['lastname'].setValue(data.lastname)
              this.Addform.controls['age'].setValue(data.age)
              this.Addform.controls['caddress'].setValue(data.caddress)
              this.Addform.controls['ccity'].setValue(data.ccity)
              this.Addform.controls['cdistrict'].setValue(data.cdistrict)
              this.Addform.controls['cstate'].setValue(data.cstate)
              this.Addform.controls['ccountry'].setValue(data.ccountry)
              this.Addform.controls['cpin'].setValue(data.cpin)
              this.Addform.controls['paddress'].setValue(data.paddress)
              this.Addform.controls['pcity'].setValue(data.pcity)
              this.Addform.controls['pdistrict'].setValue(data.pdistrict)
              this.Addform.controls['pstate'].setValue(data.pstate)
              this.Addform.controls['pcountry'].setValue(data.pcountry)
              this.Addform.controls['ppin'].setValue(data.ppin)
              this.Addform.controls['occupation'].setValue(data.occupation)
              this.Addform.controls['experience'].setValue(data.experience)
              this.Addform.controls['idproof'].setValue(data.idproof)
              this.Addform.controls['idnumber'].setValue(data.idnumber)
              this.Addform.controls['addrerssproof'].setValue(data.addressproof)
              this.Addform.controls['details'].setValue(data.details)
            }
 
update(){
          if(this.Addform.valid){
                this.api.update(this.Addform.value,this.id).subscribe((result)=>{
                alert("updated succesfully")
                this.Addform.reset();
                let ref=document.getElementById("cancel")
                ref?.click();
                this.getAllEmployee();
                })
          }
          else{
                alert("invalid form")
                // this.logValidationErrors()
                };
        }

delete(data:any){
            this.idd=data.customerid
            this.api.deletelist(this.idd).subscribe((result)=>{
            console.log("deleteddd",result);  
            alert("deleted")
            this.getAllEmployee();
            })
         }

checkValue(event:any){
                // console.log(this.Addform.value.isChecked);
                if(event.target.isChecked){
                // this.Addform.controls.cdistrict.setValue(this.Addform.pdistrict.value);
                console.log("aaaaaaa",this.Addform.value);
                 }
          }

logout(){
            sessionStorage.removeItem("currentusername")
            this.route.navigateByUrl("")
            this.isDirty=true
          }

}