import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  coursetitle=""
  coursedescription=""
  courseduration=""
  coursedate=""
  coursevenue=""

  constructor(private api:ApiService){}


  readValue=()=>
  {
    let data:any={"coursetitle":this.coursetitle,"coursedescription":this.coursedescription,"courseduration":this.courseduration,"coursedate":this.coursedate,"coursevenue":this.coursevenue}
    console.log(data)
    
    this.api.addCourses(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.coursetitle=""
          this.coursedescription=""
          this.courseduration=""
          this.coursevenue=""
          this.coursedate=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }


}
