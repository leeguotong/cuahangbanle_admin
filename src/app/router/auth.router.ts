import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthRouter implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      
    // Kiểm tra xem người dùng đã đăng nhập hay chưa, ví dụ:
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
      // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
      this.router.navigate(['/login']);
      return false;
    } else{if (state.url === '/') { // Nếu đang ở route '/'
		console.log(state.url);    
      	return true; // Không điều hướng lại
  }}
    
    return true;
  }
}
