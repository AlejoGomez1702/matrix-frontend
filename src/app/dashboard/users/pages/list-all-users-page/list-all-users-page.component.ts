import { Component, OnInit } from '@angular/core';
import { State, User } from '../../interfaces/users.module.interfaces';
import { TableColumn } from '../../../../shared/interfaces/table-column';
import { TableConfig } from '../../../../shared/interfaces/table-config';
import { UsersService } from '../../services/users.service';
import { TABLE_ACTION } from '../../../../shared/enums/table-action.enum';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { TableAction } from '../../../../shared/interfaces/table-action';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeStateComponent } from '../../components/dialog-change-state/dialog-change-state.component';
import { Router } from '@angular/router';
import { StatesService } from '../../services/states.service';
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
    actions: [TABLE_ACTION.SHOW, TABLE_ACTION.EDIT],
    showFilter: true,
    // showExcelButton: true
  }

  public states: State[] = [];

  constructor(
    private usersService: UsersService,
    private statesService: StatesService,
    private sweetAlert: SweetAlertService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setTableColumns();
    this.loadUsers();
    this.loadStates();
  }

  setTableColumns() {
    this.tableColumns = [
      { label: 'Documento', def: 'document', dataKey: 'document' },
      { label: 'Fecha de Registro', def: 'createdAt', dataKey: 'createdAt', dataType: 'date', formatt: 'dd/MM/yyyy' },
      { label: 'Nombre Completo', def: 'fullName', dataKey: 'fullName' },
      { label: 'Teléfono', def: 'phoneNumber', dataKey: 'phoneNumber' },
      { label: 'Sponsor', def: 'sponsor', dataKey: 'sponsor.document', dataType: 'object' },
      { label: 'Estado', def: 'state', dataKey: 'state.name', dataType: 'object' },
    ];
  }

  loadUsers(){

    this.usersService.getAllUsers().subscribe(
      response => {
        this.usersList = response.results;
        console.log(response);
      },
      errorResponse => {
        this.sweetAlert.presentError('Error al cargar los usuarios');
      }
    );
  }

  loadStates() {
    this.statesService.getAllStates().subscribe(
      response => {
        this.states = response.results;
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

  onTableAction(tableAction: TableAction) {
    switch (tableAction.action) {

      case TABLE_ACTION.SHOW:
        this.onShow(tableAction.row);
      break;

      case TABLE_ACTION.EDIT:
        this.onEdit(tableAction.row);
      break;

      default:
        break;
    }
  }

  onShow(user: User) {
    this.router.navigate(['/dashboard/users', user.id]);
  }

  onEdit(user: User) {

    const dialogRef = this.dialog.open(DialogChangeStateComponent, {
      data: {
        userId: user.id,
        stateId: user.state.id
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.sweetAlert.presentSuccess('Estado actualizado correctamente');
          this.loadUsers();
        }
      }
    );

  }


}
