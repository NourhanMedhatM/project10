import { Component, OnInit, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { raceWith } from 'rxjs';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  users! : User;

  userservce :UserserviceService = inject(UserserviceService);
  formBuilder!: FormBuilder;

  applyForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    add: new FormControl(''),
    password: new FormControl('')
    
  });
  constructor() {
  

  
  }



  save(){
    const user:User=this.applyForm.value
    user.id = this.userservce.usercount()+1;
    this.userservce.createuser(this.users);
    alert("data saves");}

}
