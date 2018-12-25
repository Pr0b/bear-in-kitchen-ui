import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public isLogged = false;

  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.isLogged().subscribe(logged => {
      this.isLogged = logged;
    });
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
