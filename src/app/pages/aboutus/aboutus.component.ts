import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  teamMembers = [
    {
      name: 'Team Member 1',
      email: 'member1@example.com',
      image: 'https://via.placeholder.com/150',
      facebook: 'https://facebook.com/member1',
      twitter: 'https://twitter.com/member1',
      instagram: 'https://instagram.com/member1'
    },
    {
      name: 'Team Member 2',
      email: 'member2@example.com',
      image: 'https://via.placeholder.com/150',
      facebook: 'https://facebook.com/member2',
      twitter: 'https://twitter.com/member2',
      instagram: 'https://instagram.com/member2'
    },
    {
      name: 'Team Member 3',
      email: 'member3@example.com',
      image: 'https://via.placeholder.com/150',
      facebook: 'https://facebook.com/member3',
      twitter: 'https://twitter.com/member3',
      instagram: 'https://instagram.com/member3'
    },
    {
      name: 'Team Member 4',
      email: 'member4@example.com',
      image: 'https://via.placeholder.com/150',
      facebook: 'https://facebook.com/member4',
      twitter: 'https://twitter.com/member4',
      instagram: 'https://instagram.com/member4'
    }
  ];


}
