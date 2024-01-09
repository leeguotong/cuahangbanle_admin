import { Component, inject, OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

const apiUrl = 'http://localhost:8080/cuahangbanle/login';
@Component({
  selector: 'app-login',
  standalone: true,
    imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
	
	constructor(private router: Router) {}
	
  httpClient = inject(HttpClient);
	data: any[] = [];
	user = {
			    username: '',
  				password: ''
		  	};
	
	ngOnInit(): void {
		this.fetchData();
	}
	
	fetchData(){
		this.httpClient.get(apiUrl).subscribe((data: any)=>{
			console.log(data);
			this.data = data;
		})
	}
	onSubmit() {
	  const khodt = {
	    username: this.user.username,
	    password: this.user.password
	  };
	
	  const jsonBody = JSON.stringify(khodt);
	  console.log(jsonBody)
	  this.httpClient.post(apiUrl, jsonBody).subscribe(
	    (response: any) => {
	      console.log(response);
		   if (response.message === "true") {
	        // Hiển thị thông báo thành công
	        alert("Welcome");
	        // Cập nhật danh sách hàng hóa sau khi thêm thành công
	        localStorage.setItem("isLoggedIn","true");
	        localStorage.setItem("response",response.role);
	        localStorage.setItem("username",response.userName);
	        if(response.role == '1'){
				this.router.navigate(['']).then(()=>{	
			 	window.location.reload()
		 		})
		 	}
		 	else if(response.role == "2"){
				 this.router.navigate(['/user']).then(()=>{
				 window.location.reload()
		 	}
    		);
    		}
	     	
	      } else {
	        // Xử lý trường hợp không thành công
	        console.error('Lỗi khi đăng nhập:', response);
	      }
	    },
	    (error: any) => {
	      // Xử lý lỗi nếu có
	      alert('Tài khoản hoặc mật khẩu không đúng');
	      console.error('Tài khoản hoặc mật khẩu không đúng', error);
	    }
	  );
	}

}
