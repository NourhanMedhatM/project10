import { Component, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];

  userservce: UserserviceService = inject(UserserviceService);

  constructor() {

    this.users = this.userservce.getallusers();

  }

  deleteruser(id: number) {
    this.userservce.deleteuser(id);

  }


}
