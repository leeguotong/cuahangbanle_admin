import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  	title = 'cuahangbanle-admin';
  	isLoggedIn: boolean = false;
  	isAdmin: boolean = false;
  	constructor(private router: Router) {}
  	ngOnInit(): void {
		this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
		this.isAdmin = localStorage.getItem('response') === '1';
		if(!this.isLoggedIn){this.router.navigate(['/login']);}
		
	}
	logOut(){
		 localStorage.setItem("isLoggedIn","false");
		 localStorage.removeItem('response');
		 this.router.navigate(['/login']).then(()=>{
			 window.location.reload()
		 });
	}
	
}
