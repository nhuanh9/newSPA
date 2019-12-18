import {Component, OnInit} from '@angular/core';
import {House} from '../../../model/House';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HouseService} from '../../../Services/house/house.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private  router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  login() {
  }

  register() {

  }
}
