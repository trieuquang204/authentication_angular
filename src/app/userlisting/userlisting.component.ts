import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { UpdatepopupComponent } from '../updatepopup/updatepopup.component'

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service : AuthService, private dialog: MatDialog) {
    this.loadUser()
  }

  userlist: any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  loadUser() {
    this.service.getAll().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];

  updateUser(id: any) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '30%',
      data: {
        usercode: id
      }
    })

    popup.afterClosed().subscribe(res => {
      this.loadUser();
    })
  }

  openDialog() {

  }
}
