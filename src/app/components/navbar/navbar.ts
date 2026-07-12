import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);
  theme = signal<'violet' | 'ocean'>('ocean');

  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleTheme() {
    const next = this.theme() === 'ocean' ? 'violet' : 'ocean';
    this.theme.set(next);
    document.documentElement.setAttribute('data-theme', next === 'violet' ? 'violet' : '');
  }
}

