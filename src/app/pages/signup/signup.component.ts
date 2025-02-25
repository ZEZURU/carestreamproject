import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
