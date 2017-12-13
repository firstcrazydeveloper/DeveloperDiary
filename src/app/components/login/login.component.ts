import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { UserModel } from '../../shared/models/user.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.min.css']
})
export class LoginComponent {
    id: string;
    password: string;
    user: UserModel = new UserModel();
    busy: Subscription;

    constructor(public router: Router, public authService: AuthService) {
    }

    Login() {
        this.busy = this.authService.login(this.id, this.password).subscribe((user: UserModel) => {
            if (user.isAunthenticate) {
                this.authService.isLoggedIn = true;
                this.authService.currentUser = user;
                this.authService.setUserDetails(user);
                this.authService.token = user.token;
                this.authService.userName = user.firstName;
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'dashboard';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate(['dashboard'], navigationExtras);

            }
            else {

            }

        },
            err => {

            });


    }

}
