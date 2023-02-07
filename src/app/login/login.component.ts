import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router) { }

  userdata : any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedlogin() {
    if (this.loginform.valid) {
      this.service.getByCode(this.loginform.value.username).subscribe(res => {
        this.userdata = res;

        if (res && this.userdata.id === this.loginform.value.username && this.userdata.password === this.loginform.value.password && this.userdata.isactive) {
          sessionStorage.setItem('username',this.userdata.id);
          sessionStorage.setItem('role',this.userdata.role);
          this.router.navigate(['']);
        }
      }, (error) => {
        this.toastr.warning('K tim thay')
      })
    } else {
      this.toastr.warning('Vui long nhap ')
    }
  }

}
