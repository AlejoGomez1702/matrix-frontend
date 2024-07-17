import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-video-player-dialog',
  template: `
    <h1 mat-dialog-title>Reproductor de video</h1>
    <div mat-dialog-content>
      <app-video-player [videoId]="data.videoId" (videoEnded)="onVideoEnded()"></app-video-player>
    </div>
    <!-- <div mat-dialog-actions>
      <button mat-button (click)="onCloseClick()" >Cerrar</button>
    </div> -->
  `,
})
export class VideoPlayerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VideoPlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { videoId: string }
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
  onVideoEnded(): void {
    this.dialogRef.close();
  }
}
