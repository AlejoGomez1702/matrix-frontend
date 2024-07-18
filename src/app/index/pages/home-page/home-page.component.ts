import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../dashboard/users/services/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  public totalRegisters: number = 0;
  public totalPatrociners: number = 0;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getTotalRegisters();
    this.getTotalPatrociners();
  }

  getTotalRegisters(): void {
    this.usersService.getRegistersTotal('Registrado').subscribe(
      response => {
        this.totalRegisters = response;
      },
      errorResponse => {
        console.log('errorResponse', errorResponse);
      }
    );
  }

  getTotalPatrociners(): void {
    this.usersService.getRegistersTotal('Patrocinado').subscribe(
      response => {
        this.totalPatrociners = response;
      },
      errorResponse => {
        console.log('errorResponse', errorResponse);
      }
    );
  }



}
