import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminRouter implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    // Kiểm tra xem người dùng có vai trò admin hay không, ví dụ:
    const isAdmin = localStorage.getItem('response') === '1';
    if (!isAdmin) {
      // Nếu không có quyền, chuyển hướng đến trang không có quyền hoặc thông báo lỗi
      this.router.navigate(['/user']);
      return false;
    }

    return true;
  }
}
