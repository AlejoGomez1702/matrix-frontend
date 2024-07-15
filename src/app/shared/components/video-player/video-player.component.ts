import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent {
  showLinks = false;
  videoId: string | null = null;
  showCloseButton = false;
  visitedVideos: Set<string> = new Set<string>();

  constructor(public sanitizer: DomSanitizer) {}

  toggleVideoLinks() {
    this.showLinks = !this.showLinks;
  }

  playVideo(event: Event, videoId: string) {
    event.preventDefault();
    this.videoId = videoId;
    this.showCloseButton = true;
    this.visitedVideos.add(videoId);
    // setTimeout(() => {
    //   this.showCloseButton = true;
    // }, 30000); // 30 segundos
  }

  closeVideo() {
    this.videoId = null;
    this.showCloseButton = false;
  }

  isVisited(videoId: string): boolean {
    return this.visitedVideos.has(videoId);
  }

}
