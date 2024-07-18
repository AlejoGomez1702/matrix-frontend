import { Component, AfterViewInit, OnDestroy, Input, EventEmitter, Output } from '@angular/core';
import { SweetAlertService } from '../../services/sweet-alert.service';

declare global {
  interface Window {
    YT: any;
    onYouTubePlayerAPIReady: () => void;
  }
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() videoId!: string;
  @Output() videoEnded = new EventEmitter<void>();
  player: any;
  showCloseButton = false;

  constructor(
    private sweetAlert: SweetAlertService
  ) {}

  ngAfterViewInit() {
    // Definir la función global en el objeto window
    window.onYouTubePlayerAPIReady = () => {
      this.player = new window.YT.Player('player', {
        height: '390',
        width: '500',
        videoId: this.videoId,
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange.bind(this)
        }
      });
    };

    // Verificar si la API de YouTube ya está cargada
    if (window.YT && window.YT.Player) {
      window.onYouTubePlayerAPIReady();
    }
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    if (event.data === window.YT.PlayerState.ENDED) {
      this.sweetAlert.presentSuccess('Misión Cumplida!');
      this.closeVideo();
    }
  }

  closeVideo() {
    this.videoEnded.emit();
    this.player.destroy();
    this.showCloseButton = false;
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  }
}
