import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata: any;
  id = "";
  result: any;
  message:any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    // if (localStorage.getItem("token") == null)
    //   localStorage.setItem("token", "token");
    this.api.post("gettoken", null).subscribe((result: any) => {
      console.log(result);
      
      localStorage.setItem("token", result.token);
    });
    this.load();
  }
  load() {
    this.formdata = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required]))
    })
  };

  submit(data: any) {
    this.api.post("login", data).subscribe((result: any) => {
      if (result.status == "success") {
        localStorage.setItem("user", result.data);
        localStorage.setItem("token", result.token);
        this.router.navigate(['/admin/dashboard']);
      }
      else{
        this.message = result.data.toString();
      }
    })
  }


}
