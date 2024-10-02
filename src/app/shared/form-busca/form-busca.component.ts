import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardComponent } from '../card/card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonToggleModule, CardComponent, MatIconModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, MatDialogModule],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss'
})
export class FormBuscaComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
