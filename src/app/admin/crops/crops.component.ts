import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {

  formdata: any;
  datas: any;
  id = "";
  constructor(private api: ApiService, private toastr:ToastrService) {

  }

  ngOnInit(): void {
    this.load();

  }
  load() {
    this.id = "";
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
    })

    this.api.get("crops").subscribe((result: any) => {
      // console.log(result);
      this.datas = result.data
    });
  }

  reset(){
    this.load();
  }

  edit(id: any) {
    this.id = id;
    // console.log(id);
    this.api.get("crops/" + id).subscribe((result: any) => {
      // console.log(result);

      this.formdata.patchValue({
        name: result.data.name,
      })
    })

  }

  submit(data: any) {
    // console.log(data);

    if (this.id != "") {
      this.api.put("crops/" + this.id, data).subscribe((result: any) => {
        // console.log(result);
        
        if (result.status == "success") {
          this.load();
          
          let element: HTMLElement = document.getElementById('btnclose') as HTMLElement;
          element.click();

        }
      })
    }

    else{
      this.api.post("crops", data).subscribe((result: any) => {
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
        this.api.delete("crops/" + id).subscribe((result:any)=>{
          this.load()
        })
        swal.fire(
          'Deleted!',
         
        )
      }
    })
      
    
  }

  // delete(id: any) {
  //   swal.fire({
  //     title: 'Are you sure?',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.api.delete("crops/" + id).subscribe((result: any) => {
  //         this.load()
  //       })
  //       this.toastr.success('Deleted Sccessfully','Module')       
  //     }
  //     else{
  //       this.toastr.error('Something went wrong','Not Deleted')
  //     }

  //   })


  // }





}
