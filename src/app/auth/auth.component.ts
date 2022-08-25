import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, observable } from "rxjs";
import { AuthService, signupresponse } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit{
    loginMode: boolean = false;
    loading: boolean = false;
    error: string = null;
   
    isAuthenticated : boolean = false;
    
    constructor(private authservice: AuthService,private router:Router) { }
    onSwitchMode() {
        this.loginMode = !this.loginMode;
    }

    ngOnInit(): void {
    }
    onSubmit(authform: NgForm) {
        
        const email = authform.value.email;
        const password = authform.value.password
        this.loading = true;
        
        let authObs : Observable<signupresponse>

        if (this.loginMode) {
         authObs =  this.authservice.login(email, password)           
        }
        else {
          authObs =  this.authservice.signup(email, password)    
         }

        authObs.subscribe(responsedata => {
            console.log(responsedata);
            this.loading = false;
           this.router.navigate(['/recipes']);
        },
            errorMessage => {
                console.log(errorMessage)
                this.loading = false;
                this.error = errorMessage;
            }
        );

        authform.reset();
    }
    onHndleError(){
        this.error=null   
    }
}