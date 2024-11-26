import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';
import { IAPiResponse } from '../../helpers/api-response';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  roleLists: IRole[] = [];
  // or
  http = inject(HttpClient);
  // constructor(public http: HttpClient) {} same as above

  isLoading: boolean = true;

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get<IAPiResponse<IRole[]>>(
        'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles'
      )
      .subscribe((res: IAPiResponse<IRole[]>) => {
        this.roleLists = res.data;
        this.isLoading = false;
      });
  }

  version: number = 18;
  date: Date = new Date();
  username: string = 'John Doe';
  selectedRole: string = 'admin';

  showWelcomeMessage() {
    alert('Welcome ' + this.username + '!');
    // return `Welcome ${this.username}!`;
  }

  showMessage(msg: string) {
    alert(msg);
  }
}
