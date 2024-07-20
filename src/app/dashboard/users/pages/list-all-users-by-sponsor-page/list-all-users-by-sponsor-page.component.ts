import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users.module.interfaces';
import { TableColumn } from '../../../../shared/interfaces/table-column';
import { TableConfig } from '../../../../shared/interfaces/table-config';
import { TableAction } from '../../../../shared/interfaces/table-action';

@Component({
  selector: 'app-list-all-users-by-sponsor-page',
  templateUrl: './list-all-users-by-sponsor-page.component.html',
  styleUrl: './list-all-users-by-sponsor-page.component.scss'
})
export class ListAllUsersBySponsorPageComponent implements OnInit {

  private sponsorId: number = 0;
  public sponsorName: string = '';

  usersList: User[] = [];
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isPaginable: true,
    // showActions: true,    
    // actions: [TABLE_ACTION.SHOW, TABLE_ACTION.EDIT],
    showFilter: true,
    // showExcelButton: true
  }

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.setTableColumns();


    this.activatedRoute.params.subscribe(
      params => {
        this.sponsorId = params['id'];
        this.getUserById();
        this.getAllUsersBySponsor();
      }
    );
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Documento', def: 'document', dataKey: 'document' },
      { label: 'Fecha de Registro', def: 'createdAt', dataKey: 'createdAt', dataType: 'date', formatt: 'dd/MM/yyyy' },
      { label: 'Nombre Completo', def: 'fullName', dataKey: 'fullName' },
      { label: 'Teléfono', def: 'phoneNumber', dataKey: 'phoneNumber' },
      // { label: 'Sponsor', def: 'sponsor', dataKey: 'sponsor' },
      { label: 'Estado', def: 'state', dataKey: 'state.name', dataType: 'object' },
    ];
  }

  getUserById() {
    this.usersService.getUserById(this.sponsorId).subscribe(
      response => {
        this.sponsorName = response.user.fullName;
      }
    );
  }

  getAllUsersBySponsor() {
    this.usersService.getAllUsersBySponsor(this.sponsorId).subscribe(
      response => {
        this.usersList = response.results;
      }
    );
  }

  onTableAction(tableAction: TableAction) {
    // switch (tableAction.action) {

    //   case TABLE_ACTION.SHOW:
    //     this.onShow(tableAction.row);
    //   break;

    //   case TABLE_ACTION.EDIT:
    //     this.onEdit(tableAction.row);
    //   break;

    //   default:
    //     break;
    // }
  }

}
