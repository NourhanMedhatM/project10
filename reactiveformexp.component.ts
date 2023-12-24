import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformexp',
  templateUrl: './reactiveformexp.component.html',
  styleUrls: ['./reactiveformexp.component.css']
})
export class ReactiveformexpComponent {


  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

//

profileForm = new FormGroup({
  Name: new FormControl(''),
  Age: new FormControl(''),
  address: new FormGroup({
    Mail: new FormControl(''),
    city: new FormControl(''),
    password: new FormControl(''),
    username: new FormControl(''),
  }),
});


onSubmit() {
 
  console.warn(this.profileForm.value);
}

profileFormBuilder = this.formBuilder.group({
  Name: ['' , Validators.required],
  Age: [''],
  address: this.formBuilder.group({
    Mail: [''],
    city: [''],
    passwod: [''],
    username: [''],
  }),
});

onSubmitbuilder() {
 
  console.warn(this.profileFormBuilder.value);
}


profileFormBarray = this.formBuilder.group({
  Name: ['', Validators.required],
  Age: [''],
  address: this.formBuilder.group({
    email: [''],
    city: [''],
    password: [''],
    username: [''],
  }),
  aliases: this.formBuilder.array([this.formBuilder.control('')]),
  user  :  this.formBuilder.array([this.formBuilder.control('')]),
});


onSubmitbuilderarray() {

  console.warn(this.profileFormBuilder.value);
}

get aliases() {
  return this.profileFormBarray.get('aliases') as FormArray;
}

get user() {
  return this.profileFormBarray.get('user') as FormArray;
}

addAlias() {
  this.aliases.push(this.formBuilder.control(''));
}

addUser() {
  this.user.push(this.formBuilder.control(''));
}

constructor(private formBuilder: FormBuilder) {}

}
