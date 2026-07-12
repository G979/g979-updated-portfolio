import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  facts = [
    { value: '6+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '3', label: 'Companies' },
  ];

  experience = [
    { role: 'Software Engineer', company: 'Digital Academy', period: 'Oct 2023 – Present' },
    { role: 'Front-End Developer', company: 'ELTA Courier', period: 'Jul 2021 – Jul 2023' },
    { role: 'Junior Front-End Developer', company: 'Nostos Software Solutions', period: 'Sep 2018 – Nov 2019' },
    { role: 'Freelance Software Engineer', company: 'Self-Employed', period: 'Jan 2020 – Ongoing' },
  ];
}
