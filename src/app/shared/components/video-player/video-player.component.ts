import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';

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
  player: any;

  ngAfterViewInit() {
    // Definir la función global en el objeto window
    window.onYouTubePlayerAPIReady = () => {
      this.player = new window.YT.Player('player', {
        height: '390',
        width: '440',
        videoId: this.videoId,
        events: {
          'onReady': this.onPlayerReady,
          'onStateChange': this.onPlayerStateChange
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
      alert('done');
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.destroy();
    }
  }
}
