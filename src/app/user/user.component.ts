import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
	isLoggedIn: boolean = false;
  	isAdmin: boolean = false;
  	constructor(private router: Router) {}
  	ngOnInit(): void {
		this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
		this.isAdmin = localStorage.getItem('response') === '2';
		console.log(this.isLoggedIn)
	}
	logOut(){
		 localStorage.setItem("isLoggedIn","false");
		 this.router.navigate(['/login']);
		
	}
}
