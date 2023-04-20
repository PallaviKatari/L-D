import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/shared/loader/loader/loader.service';
import { LoginParam, User } from '../auth.model';
import { AuthService } from '../auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {LdService} from 'src/app/modules/ld.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  submitted: boolean = false;
  loginForm!: FormGroup;
  dblist: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    public toastr: ToastrService,
    private ngxLoader: NgxUiLoaderService,
    private ldService: LdService,
  ) {}

  ngOnInit(): void {
    // this.GetDBList();
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      dbName: new FormControl('', Validators.required),
    });
  }

  submit(formValue: LoginParam) {
    this.loginForm.markAllAsTouched();
    let login = {
      "userName": this.loginForm.value.username,
      "password": this.loginForm.value.password,
    }
    this.errorMessage = null;
    this.submitted = true;
    this.ngxLoader.start();
    this.authService.login(login).subscribe((res: User) => {
      if (res.data.token) {
        this.toastr.success('Logged In Successfully', '', {
          timeOut: 3000,
          tapToDismiss: true,
          positionClass: 'toast-top-right',
        });
        this.ngxLoader.stop();
        this.router.navigate(['Ld/home']);
      } else {
        this.ngxLoader.stop();
        this.submitted = false;
        this.toastr.error('Login Failed', '', {
          timeOut: 3000,
          tapToDismiss: true,
          positionClass: 'toast-top-right',
        });
      }
    });
  }

  onItemSelect(event: any) {
    this.ldService.CheckDb(event.target.value).subscribe((res:any) => {
      this.ngxLoader.start();
      if (res.dbStatus === true) {
        this.loginForm.controls['username'].enable();
        this.loginForm.controls['password'].enable();
      } else {
        this.toastr.error('Server is inactive please contact admin', '', {
          timeOut: 3000,
          tapToDismiss: true,
          positionClass: 'toast-top-right',
        });
        this.loginForm.controls['username'].disable();
        this.loginForm.controls['password'].disable();
      }
      setTimeout(() => {
        this.ngxLoader.stop();
      }, 1500);
    });
  }
  GetDBList() {
    this.ldService.getDB().subscribe((res: any) => {
      this.dblist = res;
    });
  }
}
