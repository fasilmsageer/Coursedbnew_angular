import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchcourse',
  templateUrl: './searchcourse.component.html',
  styleUrls: ['./searchcourse.component.css']
})
export class SearchcourseComponent {

  constructor(private api:ApiService){}

  coursetitle=""
  searchdata:any=[]

  readValue=()=>{
    let data ={"coursetitle":this.coursetitle}
    console.log(data)

    this.api.searchCourses(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length == 0){
          alert("Invalid course title")
        }else{
          this.searchdata = response;
        }
      }
    )
  }

}
