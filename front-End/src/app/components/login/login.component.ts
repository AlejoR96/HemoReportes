import { Component, OnInit } from '@angular/core';

/* Import module Form Reactive */
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    /* attribute FormReactive in login  */

    loginForm: FormGroup;
    validationMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    constructor(private fb: FormBuilder, private router:Router) {
        this.loginForm = this.fb.group({
            user: ['',[Validators.required, Validators.pattern(this.validationMail)]],
            password: ['',Validators.required],
        });
    }

    ngOnInit(): void {
    }

    successAccessUser() {
        console.log(this.loginForm);
        console.log(this.loginForm.get('user')?.value);

        const data_user: User = {
            email: this.loginForm.get('user')?.value,
            password: this.loginForm.get('password')?.value
        }
        console.log(data_user);

        this.router.navigate(['/'])

        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Tiene x notificaciones',

          })
    }
}


