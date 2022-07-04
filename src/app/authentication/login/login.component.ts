import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder,Validators,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

        id:any=[]
        password:any=[]
        submitted:any;
        loggedin:any;
constructor(private fb:FormBuilder,private http:ApiserviceService,private router:Router) { }
  
Logform=this.fb.group({
        id:new FormControl('',[Validators.minLength(4),Validators.required]),
        password:new FormControl('',[Validators.minLength(4),Validators.required]),
        })

ngOnInit(): void {

  }
 
  login(){
    this.http.getdata().subscribe((res:any)=>{
    const user=res.find((a:any)=>{
    console.log("ajnasxmdkd",a.id);
    return a.id===this.Logform.value.id && a.password===this.Logform.value.password
    });

    if(this.Logform.valid){
    if(user){
    // this.loggedin=false
    alert("success");
    sessionStorage.setItem("currentusername",JSON.stringify(user))
    sessionStorage.setItem("username",JSON.stringify(user.name))
    this.router.navigateByUrl("/list")
    }
    else{
    alert("user not found")
    }
    }
    else{
    alert("invalid form")
    }
    return user
    })
 
}

public onSubmit(): void {
  this.submitted = true;
  if(!this.Logform.valid) {
    return;
  }
}

}
