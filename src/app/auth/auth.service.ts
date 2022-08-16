import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { User } from "./user.module";
export interface signupresponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: string
}
@Injectable({
    providedIn: "root"
})
export class AuthService {
    user = new Subject<User>();
    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<signupresponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmoFdTRwGJUHjxLFMVgIkr393E83ci-yA ', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(catchError(this.handelError), tap(resp => {
                this.authenticateUser(resp.email, resp.localId, resp.idToken, +resp.expiresIn)
            }))
    }

    login(email: string, password: string) {
        return this.http.post<signupresponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmoFdTRwGJUHjxLFMVgIkr393E83ci-yA', {

            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(catchError(this.handelError), tap(resp => {
                this.authenticateUser(resp.email, resp.localId, resp.idToken, +resp.expiresIn)
            }))

    }

    private handelError(errorResp: HttpErrorResponse) {
        let errorMessage = 'An Error occured'
        if (!errorResp.error || !errorResp.error.error) {
            return throwError(errorMessage)
        }
        switch (errorResp.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This Email Exist Already'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email Not Found'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Invalid Password'
                break;
        }
        return throwError(errorMessage);
    }
    private authenticateUser(email: string, localId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, localId, token, expirationDate);
         this.user.next(user)    
    }
}