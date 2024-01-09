
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HanghoaComponent } from './hanghoa/hanghoa.component';
import { KhoComponent } from './kho/kho.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { AuthRouter } from './router/auth.router';
import { LoginComponent } from './login/login.component';
import { AdminRouter } from './router/admin.router';
import { UserComponent } from './user/user.component';

 export const routes: Routes = [
	 
	 { path: 'hanghoa', component: HanghoaComponent },
	 { path: 'kho', component: KhoComponent, canActivate: [AdminRouter]},
	 { path: 'khachhang', component: KhachhangComponent,canActivate: [AdminRouter] },
	 { path: 'user', component: UserComponent },  
  	{ path: 'login', component: LoginComponent }, // Thêm route cho trang đăng nhập
	 

];
@NgModule({
  imports: [
    // ... other imports
    RouterModule.forRoot(routes)
  ],
   exports: [RouterModule]
  // ...
})

export class AppRoutingModule { }
