import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  getallusers():User[]{
    return this.users;
  }
  getuserbyid(id:number):User |undefined{

    return this.users.find( user => user.id === id );
}
deleteuser(id:number){

  const index = this.users.findIndex((user => user.id === id));
  this.users.splice(index,1);
 
 }
 
 usercount():number{
 
   return this.users.length;
 }
 
 createuser(user :User){
 
   this.users.push(user);
 }
 private users :User[]= [
  {
    id: 1,
    name: "Medhat",
    city: "eg",
    add: "Helwan",
    age:57,
    useername:"MD",
    email:"njdjso@gmail.com",
    password:"123"
  },
  {
    id: 2,
    name: "Nourhan",
    city: "eg",
    add: "Helwan",
    age:25,
    useername:"NM",
    email:"njdjso@gmail.com",
    password:"123"
  },
  {
    id: 3,
    name: "Mariam",
    city: "eg",
    add: "maadi",
    age:18,
    useername:"MA",
    email:"njdjso@gmail.com",
    password:"123"
  },
  {
    id: 4,
    name: "Ahmed",
    city: "eg",
    add: "maadi",
    age:27,
    useername:"AS",
    email:"njdjso@gmail.com",
    password:"123"
  },
  {
    id: 5,
    name: "Toka",
    city: "eg",
    add: "maadi",
    age:22,
    useername:"TM",
    email:"njdjso@gmail.com",
    password:"123"
  },
  {
    id: 6,
    name: "shosho",
    city: "eg",
    add: "maadi",
    age:47,
    useername:"sho",
    email:"njdjso@gmail.com",
    password:"123"
  }
 ]
}
