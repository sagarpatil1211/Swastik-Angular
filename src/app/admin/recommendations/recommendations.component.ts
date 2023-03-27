import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  farmerid: any;
  farmer: any;
  formdata: any;
  result: any;
  crops: any;

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.farmerid = this.route.snapshot.paramMap.get("farmerid");
    this.api.get("farmers/" + this.farmerid).subscribe((result: any) => {
      this.farmer = result.data;
    })
  }


  ngOnInit(): void {
    this.api.get("crops").subscribe((result: any) => {
      this.crops = result.data;
    })
    this.load();
  }

  load() {
    this.formdata = new FormGroup({
      farmerid: new FormControl(this.farmerid),
      cropid: new FormControl("", Validators.compose([Validators.required])),
      rdate: new FormControl("", Validators.compose([Validators.required])),
      dose: new FormControl("", Validators.compose([Validators.required])),
      space: new FormControl("", Validators.compose([Validators.required])),
      drip: new FormControl("", Validators.compose([Validators.required])),
      sparewater: new FormControl("", Validators.compose([Validators.required])),
    })

    this.api.get("farmers/recommendation/" + this.farmerid).subscribe((result: any) => {
      this.result = result.data;
    });
  }

  submit(data: any) {
    this.api.post("farmers/recommendation", data).subscribe((result:any)=>{
      this.load();
      let element: HTMLElement = document.getElementById('btnclose') as HTMLElement;
        element.click();
    })
  }

  delete(id: any) {
    swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.delete("farmers/recommendation/" + id).subscribe((result:any)=>{
          this.load()
        })
        swal.fire(
          'Deleted!',
         
        )
      }
    }) 
  }
}




