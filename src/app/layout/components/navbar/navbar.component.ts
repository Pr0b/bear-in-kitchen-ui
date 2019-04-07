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
  public canEdit = false;

  constructor(private router: Router,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.isLogged().subscribe(logged => {
      this.isLogged = logged;
    });
    this.auth.canLoggedUserEdit().subscribe(logged => {
      this.canEdit = logged;
    });
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
