import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from '../shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
  }

  googleLogin() {
    this.auth.googleLogin().then(() => {
      this.router.navigate(['']);
    });
  }

  signUp() {
    this.router.navigate(['/signup']);
  }
}
