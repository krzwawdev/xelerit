import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StretchModalComponent } from '../../shared/stretch-modal/stretch-modal.component';

type Muscle = {
  key: string;
  title: string;
  image: string;
  description: string;
  videoUrl: string;
};

const MUSCLES_BY_PART: Record<string, Muscle[]> = {
  nogi: [
    { key: 'hamstrings', title: 'Dwugłowe', image: 'https://placehold.co/400x300?text=Hamstrings', description: 'Lengthens posterior thigh; helpful after running.', videoUrl: 'https://www.youtube.com/embed/1QDaGJE0QyQ' },
    { key: 'quads', title: 'Uda', image: 'https://placehold.co/400x300?text=Quads', description: 'Opens front of thigh; great for sitting relief.', videoUrl: 'https://www.youtube.com/embed/rQmQykGq4nU' },
    { key: 'calves', title: 'Łydki', image: 'https://placehold.co/400x300?text=Calves', description: 'Releases lower leg tension; improves ankle mobility.', videoUrl: 'https://www.youtube.com/embed/M3Xr7jGJvvU' },
  ],
  plecy: [
    { key: 'lats', title: 'Skrzydła', image: 'https://placehold.co/400x300?text=Lats', description: 'Improves overhead mobility and posture.', videoUrl: 'https://www.youtube.com/embed/1E5vWNo8V1o' },
  ],
  barki: [
    { key: 'delts', title: 'Mięśnie barku', image: 'https://placehold.co/400x300?text=Deltoids', description: 'Reduces shoulder stiffness and improves range.', videoUrl: 'https://www.youtube.com/embed/NbUdR0H8qOk' },
    { key: 'rotator-cuff', title: 'Rotatory barku', image: 'https://placehold.co/400x300?text=Rotator%20Cuff', description: 'Gentle mobility for rotator cuff health.', videoUrl: 'https://www.youtube.com/embed/3G1wC21mH6M' },
  ],
  szyja: [
    { key: 'traps', title: 'Kaptury', image: '/traps.png', description: 'Zmniejszenie bólu karku, rozluźnienie', videoUrl: 'https://www.youtube.com/embed/uwLcpgIqpnU' },
  ],
  rece: [
    { key: 'bicep', title: 'Biceps', image: 'https://placehold.co/400x300?text=Bicep', description: 'Flexes and strengthens bicep muscles.', videoUrl: 'https://www.youtube.com/embed/ykJmrZ5v0Oo' },
  ],
};

@Component({
  selector: 'app-body-part-page',
  standalone: true,
  imports: [CommonModule, RouterLink, TitleCasePipe, StretchModalComponent],
  templateUrl: './body-part.component.html',
  styleUrl: './body-part.component.css'
})
export class BodyPartPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly part = signal<string>('');
  protected readonly muscles = computed<Muscle[]>(() => MUSCLES_BY_PART[this.part()] ?? []);

  protected readonly selected = signal<Muscle | null>(null);
  protected open(m: Muscle) { this.selected.set(m); }
  protected close() { this.selected.set(null); }

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.part.set(params.get('part') ?? '');
    });
  }
}


