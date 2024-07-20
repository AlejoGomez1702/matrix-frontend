import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.module.interfaces';
import { TableColumn } from '../../../../shared/interfaces/table-column';
import { TableConfig } from '../../../../shared/interfaces/table-config';
import { UsersService } from '../../services/users.service';
import { TABLE_ACTION } from '../../../../shared/enums/table-action.enum';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { TableAction } from '../../../../shared/interfaces/table-action';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeStateComponent } from '../../components/dialog-change-state/dialog-change-state.component';
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
    actions: [TABLE_ACTION.EDIT],
    showFilter: true,
    // showExcelButton: true
  }

  constructor(
    private usersService: UsersService,
    private sweetAlert: SweetAlertService,
    private dialog: MatDialog
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
  }

  onTableAction(tableAction: TableAction) {
    switch (tableAction.action) {
      case TABLE_ACTION.EDIT:
        this.onEdit(tableAction.row);
        break;

      default:
        break;
    }
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
          this.loadData();
        }
      }
    );

  }


}
