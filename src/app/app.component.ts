import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CardBuscaComponent } from './shared/card-busca/card-busca.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './shared/container/container.component';
import {MatCardModule} from '@angular/material/card';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatCardModule, ContainerComponent, HomeComponent, BannerComponent, FooterComponent, MatToolbarModule, MatButtonModule, CardBuscaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jornada-milhas';
}
