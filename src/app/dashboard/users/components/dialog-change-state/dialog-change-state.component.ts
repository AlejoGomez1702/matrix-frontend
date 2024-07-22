import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StatesService } from '../../services/states.service';
import { OnEditData, State } from '../../interfaces/users.module.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-dialog-change-state',
  templateUrl: './dialog-change-state.component.html',
  styleUrl: './dialog-change-state.component.scss'
})
export class DialogChangeStateComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    stateId: ['', [Validators.required] ]
  });

  public states: State[] = [];

  constructor(
    private usersService: UsersService,
    private statesService: StatesService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogChangeStateComponent>,
    private sweetAlert: SweetAlertService,
    @Inject(MAT_DIALOG_DATA) public data: OnEditData,
  ) { }

  ngOnInit(): void {
    this.loadStates();    
  }

  loadStates() {
    this.statesService.getAllStates().subscribe(
      response => {
        this.states = response.results;
        this.form.reset({ stateId: this.data.stateId });
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeState()
  {
    const newState = this.form.value.stateId;

    this.usersService.changeUserState(this.data.userId, newState).subscribe(
      response => {
        this.sweetAlert.presentSuccess('Estado actualizado correctamente');
        this.dialogRef.close(true);
      },
      errorResponse => {
        console.log(errorResponse);
      }
    );

  }

}
