import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  attractions = [
    {
      name: 'Reuzenrad',
      description: 'Dit is een reuzenrad!',
      madeBy: 'Thom Kok',
      image: 'Reuzenrad.png',
      alt: 'reuzenrad'
    },
    {
      name: 'Zweefmolen',
      description: 'Dit is een zweefmolen!',
      madeBy: 'Thom Kok',
      image: 'Zweefmolen.png',
      alt: 'zweefmolen'
    },
    {
      name: 'Achtbaan',
      description: 'Dit is een achtbaan!',
      madeBy: 'Thom Kok',
      image: 'Achtbaan.png',
      alt: 'achtbaan'
    },
    {
      name: 'Ghostship',
      description: 'Dit is een schip!',
      madeBy: 'Thom Kok',
      image: 'Ghostship.png',
      alt: 'ghostship'
    },
    {
      name: 'Locomotief',
      description: 'Dit is een locomotief!',
      madeBy: 'Thom Kok',
      image: 'Locomotief.png',
      alt: 'locomotief'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
