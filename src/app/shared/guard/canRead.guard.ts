import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class CanReadGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    this.auth.user.subscribe(user1 => {
      console.error('this.auth.user=' + user1.displayName);
    });

    return this.auth.user.pipe(
      take(1),
      map(user => user && this.auth.canRead(user)),
      tap(canRead => {
        if (!canRead) {
          console.error('Access denied. Must have permission to Read content');
          this.router.navigate(['/access-denied']);
        }
      })
    );
  }
}
