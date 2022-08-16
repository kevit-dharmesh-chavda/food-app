import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, observable } from "rxjs";
import { AuthService, signupresponse } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    loginMode: boolean = false;
    loading: boolean = false;
    error: string = null;
   
    
    
    constructor(private authservice: AuthService) { }
    onSwitchMode() {
        this.loginMode = !this.loginMode;
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
        },
            errorMessage => {
                console.log(errorMessage)
                this.loading = false;
                this.error = errorMessage;
            }
        );

        authform.reset();
    }
}