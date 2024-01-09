import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const apiUrl = 'http://localhost:8080/cuahangbanle/khos';
@Component({
  selector: 'app-kho',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './kho.component.html',
  styleUrl: './kho.component.css'
})
export class KhoComponent implements OnInit{
	httpClient = inject(HttpClient);
	data: any[] = [];
	kho = {
			    tenKho:'',
			    diaChi:''
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
	  const khodt = {
	    tenKho: this.kho.tenKho,
	    diaChi: this.kho.diaChi
	  };
	
	  const jsonBody = JSON.stringify(khodt);
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
