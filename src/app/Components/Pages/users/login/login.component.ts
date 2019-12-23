import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../../../Services/user.service';
import {UserHouse} from '../../../../model/userHouse';
import {forEachComment} from 'tslint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: UserHouse[];

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private  router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
    this.users = this.userService.getList();
  }

  login() {
    this.users.forEach((user) => {
      if (user.username === this.loginForm.get('username').value) {
        if (user.password === this.loginForm.get('password').value) {
          alert('Hello ' + user.firstName);
          this.router.navigate(['/']);
        } else {
          alert('Sai mat khau!');
        }
      }
    });
  }
}
