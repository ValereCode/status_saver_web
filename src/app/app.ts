import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Feature {
  id: number;
  title: string;
  description: string;
  iconUrl?: string;
  iconSvg?: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StatusSaver');

  // Phone mockup image URL
  protected readonly phoneMockupUrl = '/phone_mockup_1764439744354.png';

  // Features data
  protected readonly features: Feature[] = [
    {
      id: 1,
      title: 'Lightning Fast',
      description: 'Download images and videos instantly with zero quality loss. Optimized for speed.',
      iconUrl: '/lightning_icon_1764439437756.png'
    },
    {
      id: 2,
      title: '100% Secure',
      description: 'Your data stays on your device. We never upload your statuses to external servers.',
      iconUrl: '/shield_icon_1764439452160.png'
    },
    {
      id: 3,
      title: 'User Friendly',
      description: 'Clean interface designed for everyone. No complicated settings or tutorials needed.',
      iconUrl: '/phone_icon_1764439466722.png'
    },
    {
      id: 4,
      title: '24-Hour History',
      description: 'View saved statuses even after they disappear from WhatsApp after 24 hours.',
      iconUrl: '/clock_icon_1764439481206.png'
    },
    {
      id: 5,
      title: 'Direct Repost',
      description: 'Repost statuses to your own story or share to other apps with a single tap.',
      iconUrl: '/share_icon_1764439496989.png'
    },
    {
      id: 6,
      title: 'Bulk Download',
      description: 'Select multiple statuses and save them all at once to your gallery.',
      iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>`
    }
  ];
}
