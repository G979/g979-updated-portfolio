import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 75 },
        { name: 'JavaScript', level: 75 },
        { name: 'CSS / SCSS', level: 75 },
        { name: 'React', level: 50 },
      ],
    },
    {
      category: 'Backend & Blockchain',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Python / Flask', level: 60 },
        { name: 'PHP Laravel', level: 55 },
        { name: 'Java', level: 50 },
        { name: 'Solidity', level: 50 },
      ],
    },
    {
      category: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git / GitHub / Bitbucket', level: 80 },
        { name: 'Docker', level: 65 },
        { name: 'Figma / Zeplin', level: 70 },
        { name: 'WordPress', level: 75 },
        { name: 'AWS', level: 55 },
      ],
    },
  ];
}
