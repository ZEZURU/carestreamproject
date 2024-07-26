import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { HeroComponent } from "../../shared/hero/hero.component";
import { FooterComponent } from "../../shared/footer/footer.component";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, HeroComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
