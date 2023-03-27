import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit{
  formdata:any;
  id = "";
  result:any;

  constructor(private api:ApiService){}


  ngOnInit(): void {
    this.load();
  }

  load(){
    this.id ="";
    this.api.get("admins").subscribe((result:any)=>{
      console.log(result);
      
      this.result = result.data;
    })
    this.formdata= new FormGroup({
      name:new FormControl("",Validators.compose([Validators.required])),
      username:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required]))
    })
  };

  edit(id:any){
    this.id = id;
     this.api.get("admins/" +id).subscribe((result:any)=>{
      this.formdata= new FormGroup({
        name:new FormControl(result.data.name,Validators.compose([Validators.required])),
        username:new FormControl(result.data.username,Validators.compose([Validators.required])),
        password:new FormControl(result.data.password,Validators.compose([Validators.required]))
      })
    })
  }

  reset(){
    this.load();
    // this.id = "";
    // this.formdata= new FormGroup({
    //   name:new FormControl("",Validators.compose([Validators.required])),
    //   username:new FormControl("",Validators.compose([Validators.required])),
    //   password:new FormControl("",Validators.compose([Validators.required]))
    // })

  }

  delete(id:any){
    swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("admins/" + id).subscribe((result:any)=>{
          this.load()
        })
        swal.fire(
          'Deleted!',
         
        )
      }
    })
      
    
  }

  submit(data:any){
    
    if(this.id != ""){
      this.api.put("admins/" + this.id, data).subscribe((result:any)=>{
        this.load();
        let element: HTMLElement = document.getElementById('btnclose') as HTMLElement;
        element.click();

        swal.fire({
          icon: 'success',
          title: 'Data updated!',
          showConfirmButton: false,
          timer: 1500
        })
        
      })
    }
    else{
      this.api.post("admins/", data).subscribe((result:any)=>{
        this.load();
        let element: HTMLElement = document.getElementById('btnclose') as HTMLElement;
        element.click();
        swal.fire({
          icon: 'success',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        
      })


    }
  }

}
