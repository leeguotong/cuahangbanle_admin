import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const apiUrl = 'http://localhost:8080/cuahangbanle/khachhangs';
@Component({
  selector: 'app-khachhang',
  standalone: true,
   imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './khachhang.component.html',
  styleUrl: './khachhang.component.css'
})
export class KhachhangComponent implements OnInit{
	httpClient = inject(HttpClient);
	data: any[] = [];
	khachhang = {
			    tentk:'',
			    matkhau:'',
			    tenkh:'',
			    email:'',
			    sodienthoai:'',
			    diachi:''
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
	postData() {
	  const khachhangdt = {
	   			tentk:this.khachhang.tentk,
			    tenkh:this.khachhang.tenkh,
			    email:this.khachhang.email,
			    sodienthoai:this.khachhang.sodienthoai,
			    diachi:this.khachhang.diachi
	  };
	
	  const jsonBody = JSON.stringify(khachhangdt);
	  console.log(jsonBody)
	  this.httpClient.post(apiUrl, jsonBody).subscribe(
	    (response: any) => {
	      console.log(response);
		      if (response.message === "Thêm thành công") {
	        // Hiển thị thông báo thành công
	        alert("Thêm hàng hóa thành công!");
	        // Cập nhật danh sách hàng hóa sau khi thêm thành công
	        window.location.reload();
	     	
	      } else {
	        // Xử lý trường hợp không thành công
	        console.error('Lỗi khi thêm hàng hóa:', response);
	      }
	     
	    },
	    (error: any) => {
	      // Xử lý lỗi nếu có
	      console.error('Lỗi khi gửi dữ liệu:', error);
	    }
	  );
	}

}
