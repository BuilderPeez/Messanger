import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../api-services/api-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  form! : FormGroup  
  constructor(private fb: FormBuilder, private Services: ApiServicesService, private router: Router){}
  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      image: ['', Validators.required]
    })
  }
  selectedImage: string | ArrayBuffer | null = '/assets/Images/avatarr-removebg-preview.png';

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.form.get("image")?.setValue(reader.result)
      };
    }
  }

  create(){
    if(this.form.value.firstName.length == 0){
      Swal.fire({
        title: 'Validation',
        text: 'Please supply your first Name',
        icon: 'error'
      });
      return;
    }

    else if(this.form.value.lastName.length == 0){
      Swal.fire({
        title: 'Validation',
        text: 'Please supply your last Name',
        icon: 'error'
      });
      return;
    }

    else if(this.form.value.phoneNumber.length == 0){
      Swal.fire({
        title: 'Validation',
        text: 'Please supply your phone number',
        icon: 'error'
      });
      return;
    }

    else if(this.form.value.username.length == 0){
      Swal.fire({
        title: 'Validation',
        text: 'Please supply your Username',
        icon: 'error'
      });
      return;
    }
    else if(this.form.value.email.length == 0){
      Swal.fire({
        title: 'Validation',
        text: 'Please supply your Email',
        icon: 'error'
      });
      return;
    }
    else if(this.form.value.password.length == 0){
      Swal.fire({
        title: 'Validation',
        text: 'Please supply your password',
        icon: 'error'
      });
      return;
    }
    
    this.Services.Create(this.form.value).subscribe((response: any) =>{
      console.log('Form Value',  this.form.value)
      if(response.responseCode === 200){
        Swal.fire({
          title: 'Account Created Successfully, please log in.',
          icon: 'success'
        })
        

    }
    else{
      Swal.fire({
        icon: 'error',
        title: response.ErrorMessage
      })
    } return
    
  })
  this.router.navigate([''])
  this.form.reset()
  
}
}
