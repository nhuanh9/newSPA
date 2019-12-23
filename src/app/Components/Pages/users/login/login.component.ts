import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../../Services/user.service';
import {UserHouse} from '../../../../model/userHouse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: UserHouse[];

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
    this.users = this.userService.getList();
  }

  login() {

  }
}
