import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public myForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
                     private route: ActivatedRoute,
                     private router: Router,
                     private usrregister:UserService 
                    ) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      role_id:['',Validators.required]
    });
  }

  get f() { return this.myForm.controls; }

  public addUser=function(event)
  {
    this.usrregister.add(this.myForm.value).subscribe();
    alert("usuario registrado correctamente");
    this.myForm.reset();
  }
}
