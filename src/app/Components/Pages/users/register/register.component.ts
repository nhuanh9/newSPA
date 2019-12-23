import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {element} from 'protractor';
import {UserHouse} from '../../../../model/userHouse';
import {UserService} from '../../../../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  users: UserHouse[];
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
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

  register() {

  }
}
