import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services/api-services.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form! : FormGroup
  title = 'formValidation';


  constructor(private Services: ApiServicesService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  inputValue: string = '';

  login(form:FormGroup){
    var data = {
      Username: form.value.username,
      Password: form.value.password
    }
    if(this.form.value.username.length == 0){
      Swal.fire({
        title: 'Validation',
        icon: 'error',
        text: 'Please enter your Username'
      })
      return
    }
    else if(this.form.value.password.length == 0){
      Swal.fire({
        title: 'Validation',
        icon: 'error',
        text: 'Please enter your Password'
      })
      return
    }
    this.Services.Login(data).subscribe((response:any) => {
      console.log('user', form.value, response, 'res')
      if(response.responseCode === 200){
        Swal.fire({
          title: 'Login Successful',
          icon: 'success'
        })
        this.Services.setUserCredential(response.data);
        this.router.navigate(['/pages/chat'])
      }
      else{
        Swal.fire({
          title: response.responseMessage,
          icon: 'error'
        })
      }
    })
  }
}
