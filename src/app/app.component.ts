import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  input=[
    {
    name:"Goutham",
    age:'21',
    city:"chennai",
    edit: false
    },
    
    {
    name:"Arun kumaran",
    age:'21',
    city:"chennai",
    edit: false
    },
    {
    name:"Saranya",
    age:'21',
    city:"chennai",
    edit: false
    },
    {
    name:"Marisulaganathan",
    age:'22',
    city:"chennai",
    edit: false
    },
    {
      name:"Sparrow",
      age:'21',
      city:"chennai",
      edit: false
      },
      
    {
      name:"Surya",
      age:'21',
      city:"chennai",
      edit: false
    },
    {
      name:"Rahul",
      age:'21',
      city:"chennai",
      edit: false
    },
    {
      name:"praveen",
      age:'21',
      city:"chennai",
      edit: false
    }
    ];
    constructor(private router:Router) {}
        changeEdit(index: number) {
      console.log('calling');
      this.input[index].edit = !this.input[index].edit;
       }
      deleteData(index){
        console.log("deleting");
        this.input.splice(index,1);
      }


    ngOnInit() {
    }
}
