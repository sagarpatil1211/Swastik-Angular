import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  formdata: any;
  datas: any;
  id = "";
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.load();

  }
  load() {
    this.id = "";
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required])),
      mobileno: new FormControl("", Validators.compose([Validators.required])),
      landspace: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),

    })

    this.api.get("farmers").subscribe((result: any) => {
      // console.log(result);
      this.datas = result.data
    });
  }

  edit(id: any) {
    this.id = id;
    // console.log(id);
    this.api.get("farmers/" + id).subscribe((result: any) => {
      // console.log(result);

      this.formdata.patchValue({
        name: result.data.name,
        email: result.data.email,
        mobileno: result.data.mobileno,
        landspace: result.data.landspace,
        password: result.data.password

      })
    })

  }

  submit(data: any) {
    // console.log(data);

    if (this.id != "") {
      this.api.put("farmers/" + this.id, data).subscribe((result: any) => {
        console.log(result);
        
        if (result.status == "success") {
          this.load();
          let element: HTMLElement = document.getElementById('btnclose') as HTMLElement;
          element.click();

        }
      })
    }

    else{
      this.api.post("farmers", data).subscribe((result: any) => {
        if (result.status == "success") {
          this.load();
          let element: HTMLElement = document.getElementById('btnclose') as HTMLElement;
          element.click();
          // document.getElementById("exampleModal")?.classList.remove("modal-open");
  
        }
      })
    }

 
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
        this.api.delete("farmers/" + id).subscribe((result:any)=>{
          this.load()
        })
        swal.fire(
          'Deleted!',
         
        )
      }
    }) 
  };

  reset(){
    this.load()
  }


} 