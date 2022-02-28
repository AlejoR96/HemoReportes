import { Component, OnInit } from '@angular/core';

/* Import module Form Reactive */
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    /* attribute FormReactive in login  */

    loginForm: FormGroup;
    validationMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
    validationPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            user: [
                '',
                [Validators.required, Validators.pattern(this.validationMail)],
            ],
            password: [
                '',
                [
                    Validators.required,
                    Validators.pattern(this.validationPassword),
                ],
            ],
        });
    }

    ngOnInit(): void {}

    successAccessUser() {
        console.log(this.loginForm);
    }
}
