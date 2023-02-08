import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service : AuthService) {}

  userlist: any;
  dataSource:any;

  loadUser() {
    this.service.getAll().subscribe(res => {
      console.log('quang', res)
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
    })
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];

  updateUser(id: any) {

  }
}
