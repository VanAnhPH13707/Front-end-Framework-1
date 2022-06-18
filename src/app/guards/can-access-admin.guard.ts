import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAccessAdminGuard implements CanActivate {
  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //1. Lấy thông tin người dùng đã đăng nhập
    const loggedInUser = localStorage.getItem('user');
      //2.Kiểm tra nếu có thì cho vào admin
    if(loggedInUser && loggedInUser){
      return true;
    }
    //3.Nếu không thì quay về màn login
    this.router.navigateByUrl('/auth/login');
    return false;

  }
  
}
