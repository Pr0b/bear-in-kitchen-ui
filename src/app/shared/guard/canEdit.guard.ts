import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class CanEditGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.user.pipe(
      take(1),
      map(user => user && this.auth.canEdit(user)),
      tap(canEdit => {
        if (!canEdit) {
          console.error('Access denied. Must have permission to Edit content');
          this.router.navigate(['/access-denied']);
        }
      })
    );
  }
}
