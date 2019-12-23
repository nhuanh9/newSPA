import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {element} from 'protractor';
import {UserHouse} from '../../../../model/userHouse';
import {UserService} from '../../../../Services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: UserHouse[];
  user: UserHouse;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private  router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: [''],
      password: [''],
      firstName: [''],
      lastName: ['']
    });
    this.users = this.userService.getList();
  }

  transferFormData() {
    this.user = {
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value,
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
      role: 'user'
    };
  }

  register() {
    this.userService.createUser(this.user);
    alert('Dang ki thanh cong!');
    this.router.navigate(['/login']);
  }
}
