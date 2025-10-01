import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

type BodyPart = {
  key: string;
  title: string;
  image: string;
};

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomePageComponent {
  protected readonly bodyParts: BodyPart[] = [
    { key: 'szyja', title: 'Szyja/kark', image: '/neck.png' },
    { key: 'barki', title: 'Barki', image: '/shoulder.png' },
    { key: 'rece', title: 'Ramiona', image: '/arms.png' },
    { key: 'plecy', title: 'Plecy', image: '/back.png' },
    { key: 'nogi', title: 'Nogi', image: '/legs.png' },
  ];
}


