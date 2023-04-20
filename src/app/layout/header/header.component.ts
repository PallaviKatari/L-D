import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openProspectiveClient: boolean = false;

  constructor(private authService:AuthService, public toastr: ToastrService) { }

  ngOnInit(): void {
    
  }
 
  logOut() {
    this.authService.logout().subscribe((res: any    
      ) => {
        if(res.succeeded === true)
        {         
            this.toastr.success("Loged out Successfully", '', {
            timeOut: 3000,
            tapToDismiss: true,
            positionClass: 'toast-top-right'
          });
        }        
      }
      )
    localStorage.removeItem('user');
  }


}
