import { Component } from '@angular/core';

export interface Project {
  title: string;
  tagline: string;
  body: string[];
  tags: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  accentColor?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Transfer Platform',
      tagline: 'Full-featured B2B payment platform with real-time tracking.',
      body: [
        'Led the development of a transfer platform processing over 10,000 monthly transactions. Built with Angular 16+, the platform handles multi-step payment flows, real-time status tracking, and a reporting dashboard used daily by 100+ transfer clients.',
        'Integrated REST APIs backed by PHP Laravel, implemented RxJS-driven state management, and followed Material Design guidelines throughout to ensure a consistent, professional UI.',
      ],
      tags: ['Angular 16+', 'RxJS', 'Material Design', 'REST APIs', 'PHP Laravel'],
      images: ['assets/projects/dashboard1.png', 'assets/projects/dashboard2.png'],
      liveUrl: '#',
      repoUrl: '#',
      featured: true,
      accentColor: '#00b4d8',
    },
    {
      title: 'Logistics Tracking Platform',
      tagline: 'Angular + Python Flask platform serving ELTA Courier.',
      body: [
        'Developed a full logistics tracking system for ELTA Courier, serving internal company users across the country. The platform integrates 5+ third-party APIs covering payments, mapping, and notifications.',
        'Also built single Angular web microservices for specific internal operations and delivered several pure HTML/CSS/JS landing pages for marketing campaigns.',
      ],
      tags: ['Angular', 'Python Flask', 'REST APIs', 'Mapping APIs'],
      images: ['assets/projects/logistics-1.png', 'assets/projects/logistics-2.png'],
      liveUrl: '#',
      repoUrl: '#',
      featured: true,
      accentColor: '#48cae4',
    },
    {
      title: 'Hotel Management Suite',
      tagline: 'Web app for bookings, rooms, and guest communications.',
      body: [
        'A comprehensive hotel management web application handling room availability, booking workflows, and guest communication — integrated with a PMS (Property Management System).',
      ],
      tags: ['Angular', 'Node.js', 'PHP Laravel', 'PMS Integration'],
      images: ['assets/projects/hotel-1.png'],
      liveUrl: '#',
      repoUrl: '#',
      accentColor: '#0077b6',
    },
    {
      title: 'Health Data Blockchain',
      tagline: 'Smart contract system for secure patient data sharing.',
      body: [
        'Thesis project — a Solidity smart contract system deployed on the Ethereum network enabling secure, permissioned sharing of patient health data between medical institutions. Frontend built with React and Web3.js.',
      ],
      tags: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      images: ['assets/projects/blockchain-1.png'],
      repoUrl: '#',
      accentColor: '#023e8a',
    },
    {
      title: 'EC Refunds App',
      tagline: 'Internal tool for managing EC refund workflows.',
      body: [
        'Web application built to streamline the EC refunds department, enabling faster resolution of claims through a structured workflow with real-time updates powered by Python Flask.',
      ],
      tags: ['Angular', 'REST API', 'Python Flask', 'Real-time Updates'],
      images: ['assets/projects/refunds-1.png'],
      repoUrl: '#',
      accentColor: '#0096c7',
    },
    {
      title: 'Youthful Guides',
      tagline: 'Connecting travellers with local guides across Greece.',
      body: [
        'A platform that facilitates connections between tourists and local guides in Greece. Built with Angular 19+ and Node.js, featuring real-time messaging and guide discovery by location.',
      ],
      tags: ['Angular 19+', 'RxJS', 'Node.js', 'REST APIs'],
      images: ['assets/projects/guides-1.png'],
      liveUrl: '#',
      repoUrl: '#',
      accentColor: '#00b4d8',
    },
  ];

  slideIndices: Record<string, number> = {};
  brokenImages = new Set<string>();

  imageKey(title: string, index: number): string {
    return `${title}|${index}`;
  }

  markBroken(title: string, index: number): void {
    this.brokenImages = new Set(this.brokenImages).add(this.imageKey(title, index));
  }

  isBroken(title: string, index: number): boolean {
    return this.brokenImages.has(this.imageKey(title, index));
  }

  getSlide(title: string): number {
    return this.slideIndices[title] ?? 0;
  }

  setSlide(title: string, index: number): void {
    this.slideIndices = { ...this.slideIndices, [title]: index };
  }

  nextSlide(project: Project): void {
    const current = this.getSlide(project.title);
    this.setSlide(project.title, (current + 1) % project.images.length);
  }

  prevSlide(project: Project): void {
    const current = this.getSlide(project.title);
    this.setSlide(project.title, (current - 1 + project.images.length) % project.images.length);
  }

  get featuredProjects() {
    return this.projects.filter(p => p.featured);
  }

  get otherProjects() {
    return this.projects.filter(p => !p.featured);
  }
}
