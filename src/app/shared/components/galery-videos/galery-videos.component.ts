import { VideoPlayerDialogComponent } from './../video-player-dialog/video-player-dialog.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VideoPlayerComponent } from '../video-player/video-player.component';


@Component({
  selector: 'app-galery-videos',
  templateUrl: './galery-videos.component.html',
  styleUrl: './galery-videos.component.scss'
})
export class GaleryVideosComponent {
  visitedVideos: Set<string> = new Set<string>();
  videos = [
    { id: 'dQw4w9WgXcQ', label: 'Video 1' },
    { id: '3JZ_D3ELwOQ', label: 'Video 2' },
    { id: 'tVj0ZTS4WF4', label: 'Video 3' },
    { id: '0Bmhjf0rKe8', label: 'Video 4' }
  ];

  constructor(public dialog: MatDialog) {}

  openVideo(videoId: string) {
    this.visitedVideos.add(videoId);
    const dialogRef = this.dialog.open(VideoPlayerDialogComponent, {
      width: '80%',
      disableClose: true,
      data: { videoId: videoId }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('El modal del video ha sido cerrado');
    });
  }

  isVisited(videoId: string): boolean {
    return this.visitedVideos.has(videoId);
  }
}



