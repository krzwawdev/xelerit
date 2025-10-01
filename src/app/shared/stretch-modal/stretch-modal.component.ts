import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-stretch-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stretch-modal.component.html',
  styleUrls: ['./stretch-modal.component.css']
})
export class StretchModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Input() description = '';
  private _videoUrl = '';
  safeVideoUrl: SafeResourceUrl | '' = '';

  constructor(private readonly sanitizer: DomSanitizer) {}

  @Input()
  set videoUrl(url: string) {
    this._videoUrl = url;
    this.safeVideoUrl = url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : '';
  }
  get videoUrl(): string { return this._videoUrl; }

  @Output() closed = new EventEmitter<void>();
}


