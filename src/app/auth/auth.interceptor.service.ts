import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { take } from "rxjs/operators";
import { exhaustMap } from "rxjs/operators";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authservice:AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
       return this.authservice.user.pipe(take(1),exhaustMap(user=>{
            if(!user){
                
                return next.handle(req);
            }
            const modifiedRequest = req.clone({
              params:new HttpParams().set('auth',user.token)   
            }

            )
            return next.handle(modifiedRequest)
        }))
    }
}


