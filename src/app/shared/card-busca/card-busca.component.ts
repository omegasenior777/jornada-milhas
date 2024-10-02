import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ContainerComponent],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss'
})
export class CardBuscaComponent {

}
