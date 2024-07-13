import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    // private authService: AuthenticationService,
    // private router: Router
  )
  {}

  logout() {

    // this.authService.logout().subscribe(
    //   response => {
    //     console.log(response)
    //     // localStorage.clear();
    //     this.router.navigate(['/auth']);
    //   },
    //   errorResponse => {
    //     console.log(errorResponse)
    //   }
    // );

  }
}
