import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';
import {Name} from '../app/names.model';
import {NamesService} from '../app/names.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vaibhav Gera';
  ns:Name
  name= 'My name is Vaibhav Gera';
  msg:string;
  constructor(private ser:NamesService,private fb:FormBuilder){

  }

  NameForm= this.fb.group({
    FirstName: ["",],
    LastName:["",]
  });

  addData(a,b){
   
    this.ns = new Name(a,b);
    console.log('inside ap component:-'+ this.ns.firstname)
    this.ser.AddViaService(this.ns.firstname,this.ns.lastname).
      subscribe(

        response =>{
          console.log('Success',response);
          this.msg= response;

        },
        error=> console.log('Error',error)

      );

      
  }

}
