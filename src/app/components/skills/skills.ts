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
        { name: 'React', level: 75 },
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 75 },
        { name: 'JavaScript', level: 75 },
        { name: 'CSS / SCSS', level: 75 },
      ],
    },
    {
      category: 'Backend & Database',
      icon: '🗄️',
      skills: [
        { name: 'Node.js', level: 65 },
        { name: 'PHP Laravel', level: 65 },
        { name: 'Python / Flask', level: 60 },
        { name: 'Firebase', level: 55 },
      ],
    },
    {
      category: 'Languages & Blockchain',
      icon: '⚙️',
      skills: [
        { name: 'WordPress', level: 75 },
        { name: 'Java', level: 50 },
        { name: 'C++', level: 50 },
        { name: 'Solidity', level: 50 },
      ],
    },
  ];

  tools: string[] = [
    'Trello', 'GitHub', 'Bitbucket', 'Zeplin', 'Figma', 'VS Code', 'Postman',
    'Docker', 'AWS', 'Git', 'DeepSeek', 'ChatGPT', 'GitHub Copilot', 'Ethereum',
    'MetaMask', 'Bootstrap', 'Angular Flex-Layout', 'Firebase', 'Webpack',
    'Jira', 'Claude', 'PHP Laravel',
  ];
}
