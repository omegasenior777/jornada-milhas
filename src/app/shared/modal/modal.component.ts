import { Component } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatChipsModule, BotaoControleComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

}
