import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  hasError: boolean = false;
  message: string = "";

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.username = "";
    this.password = "";
  }

  login() {
    this.hasError = false;
    if (this.username.trim().length === 0 || this.password.trim().length === 0) {
      this.message = "Verifica tu usuario o contraseña"
      this.hasError = true;
      return;
    }
    const body = {
      email: this.username,
      password: this.password
    }
    this.userService.login(body).subscribe( response => {
      if(response.status) {
        this.route.navigate(['main'])
      } else {
        this.message = response.message
        this.hasError = true;
      }
    });
  }


  Register(){
    this.route.navigate(['register']);
  }


}

