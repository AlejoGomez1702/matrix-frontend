import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.module.interfaces';
import { TableColumn } from '../../../../shared/interfaces/table-column';
import { TableConfig } from '../../../../shared/interfaces/table-config';
import { UsersService } from '../../services/users.service';
import { TABLE_ACTION } from '../../../../shared/enums/table-action.enum';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
// import { TABLE_ACTION } from '../../../../shared/enums/table-action.enum';

@Component({
  selector: 'app-list-all-users-page',
  templateUrl: './list-all-users-page.component.html',
  styleUrl: './list-all-users-page.component.scss'
})
export class ListAllUsersPageComponent implements OnInit {

  usersList: User[] = [];
  tableColumns: TableColumn[] = [];
  tableConfig: TableConfig = {
    isPaginable: true,
    showActions: true,    
    actions: [TABLE_ACTION.SHOW],
    showFilter: true,
    // showExcelButton: true
  }

  constructor(
    private usersService: UsersService,
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit(): void {
    this.setTableColumns();
    this.loadData();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Documento', def: 'document', dataKey: 'document' },
      { label: 'Fecha de Registro', def: 'createdAt', dataKey: 'createdAt', dataType: 'date', formatt: 'dd/MM/yyyy' },
      { label: 'Nombre Completo', def: 'fullName', dataKey: 'fullName' },
      { label: 'Teléfono', def: 'phoneNumber', dataKey: 'phoneNumber' },
      { label: 'Sponsor', def: 'sponsor', dataKey: 'sponsor' },
      { label: 'Estado', def: 'state', dataKey: 'state.name', dataType: 'object' },
    ];
  }

  loadData(){

    this.usersService.getAllUsers().subscribe(
      response => {
        this.usersList = response.results;
      },
      errorResponse => {
        this.sweetAlert.presentError('Error al cargar los usuarios');
      }
    );


    // this.usersList = Array.from({ length: 20 }, (_, index) => ({
    //   id: index + 1,
    //   email: `user${index + 1}@example.com`,
    //   password: `password${index + 1}`,
    //   fullName: `User ${index + 1}`,
    //   document: `DOC${1000 + index}`,
    //   country: 'Country ' + (index % 5 + 1),
    //   phoneNumber: `+123456789${index}`,
    //   phoneNumber2: index % 2 === 0 ? `+987654321${index}` : undefined,
    //   sponsor: `Sponsor ${index % 4 + 1}`,
    //   state: `State ${index % 3 + 1}`,
    //   isActive: index % 2 === 0,
    //   roles: [`Role ${index % 3 + 1}`],
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }));

  }


}
