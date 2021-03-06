import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public submitted = false;
  public loading = false;
  public returnUrl: string;

  error: {};
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    if (localStorage.getItem('currentUser')){
      this.router.navigate(['books']);
    }
  }

  get email() { return this.validateForm.get('email'); }
  get password() { return this.validateForm.get('password'); }

  submitForm(): void {
    if (this.validateForm.invalid) {
      return;
    }
    localStorage.setItem('currentUser', this.email.value);
    this.validateForm.reset();
    this.router.navigate(['books']);
  }
}
