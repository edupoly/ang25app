import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang25app';
  students = [
    'sachin',
    'rohit',
    'kohli',
    'samanta',
    'anushka',
    'kumar sangakkara',
    'mahela jayawardene',
    'lasith malinga',
    'angelo mathews',
    'tm dilshan',
  ];
  employees = [
    {
      firstname: 'salman',
      id: 1,
      bestpair: 'katrina',
    },
    {
      firstname: 'Amir',
      id: 2,
      bestpair: 'karishma',
    },
    {
      firstname: 'Akshay',
      id: 3,
      bestpair: 'sonakshi',
    },
    {
      firstname: 'Saif',
      id: 4,
      bestpair: 'kareena',
    },
    {
      firstname: 'Anilkapoor',
      id: 5,
      bestpair: 'madhuri',
    },
    {
      firstname: 'Ranbir',
      id: 6,
      bestpair: 'Deepika',
    },
    {
      firstname: 'Ranveer',
      id: 7,
      bestpair: 'Anushka',
    },
  ];
}
