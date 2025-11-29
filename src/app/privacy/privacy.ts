import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PrivacySection {
  id: string;
  icon: string;
  title: string;
  tldr: string;
  content: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-privacy',
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css'
})
export class Privacy {
  protected readonly lastUpdated = '29 November 2024';
  protected readonly expandedSections = signal<Set<string>>(new Set(['data-collection']));

  protected readonly sections: PrivacySection[] = [
    {
      id: 'data-collection',
      icon: '🔒',
      title: 'What Data We Collect (Spoiler: Almost Nothing!)',
      tldr: 'We only collect what\'s absolutely necessary. No tracking, no selling your data.',
      content: [
        'StatusSaver is designed with privacy at its core. Unlike most apps, we don\'t collect or store your personal information.',
        '<strong>What we DON\'T collect:</strong>',
        '• Your WhatsApp messages or contacts',
        '• Your saved statuses (they stay on YOUR device)',
        '• Your location data',
        '• Your browsing history',
        '• Any personally identifiable information',
        '<strong>What we DO collect:</strong>',
        '• Anonymous crash reports (to fix bugs)',
        '• App usage statistics (like "Download button clicked" - no personal data attached)'
      ],
      highlight: true
    },
    {
      id: 'data-storage',
      icon: '📱',
      title: 'Where Your Data Lives',
      tldr: 'Everything stays on YOUR phone. We don\'t have servers storing your statuses.',
      content: [
        'This is the best part: <strong>all your saved statuses are stored locally on your device</strong>.',
        'We don\'t upload anything to our servers. We don\'t even have servers for storing your content!',
        'Your saved images and videos go directly to your phone\'s gallery. That\'s it.',
        'If you uninstall the app, your saved statuses remain in your gallery because they\'re just regular files on your phone.'
      ]
    },
    {
      id: 'permissions',
      icon: '🔐',
      title: 'Why We Need Permissions',
      tldr: 'We only ask for permissions we actually need. No sneaky stuff.',
      content: [
        '<strong>Storage Permission:</strong> To save statuses to your gallery. Pretty obvious, right?',
        '<strong>WhatsApp Access:</strong> To read the status files that WhatsApp stores on your device. We can\'t access your messages or contacts.',
        'That\'s literally it. No camera, no microphone, no contacts, no location.',
        'You can verify this in your phone\'s app settings. We believe in transparency!'
      ]
    },
    {
      id: 'third-party',
      icon: '🚫',
      title: 'Third-Party Services',
      tldr: 'We use Google Analytics for crash reports. That\'s it. No ads, no trackers.',
      content: [
        'We use <strong>Google Firebase Analytics</strong> to understand how the app is used and to catch crashes before they ruin your experience.',
        'This data is completely anonymous. Google doesn\'t know who you are.',
        '<strong>We do NOT use:</strong>',
        '• Advertising networks',
        '• Social media trackers',
        '• Data brokers',
        '• Any service that sells your data',
        'If we ever change this, we\'ll update this policy and notify you in the app.'
      ]
    },
    {
      id: 'data-sharing',
      icon: '🤝',
      title: 'Do We Share Your Data?',
      tldr: 'Nope. Never. Not happening.',
      content: [
        'Let us be crystal clear: <strong>we do not sell, rent, or share your data with anyone</strong>.',
        'Not with advertisers. Not with data brokers. Not with anyone.',
        'The only exception would be if required by law (like a court order), but even then, we don\'t have much data to share because we don\'t collect it in the first place!',
        'Your privacy is not for sale. Period.'
      ],
      highlight: true
    },
    {
      id: 'children',
      icon: '👶',
      title: 'Children\'s Privacy',
      tldr: 'App is for 13+. We don\'t knowingly collect data from kids.',
      content: [
        'StatusSaver is intended for users aged 13 and above.',
        'We don\'t knowingly collect information from children under 13.',
        'If you\'re a parent and believe your child has used our app, contact us and we\'ll help address any concerns.'
      ]
    },
    {
      id: 'security',
      icon: '🛡️',
      title: 'How We Protect Your Data',
      tldr: 'Since everything is on your device, YOU control the security.',
      content: [
        'The best security is not storing your data in the first place!',
        'Since all your saved statuses are on your device, your phone\'s security protects them.',
        'We recommend:',
        '• Using a strong lock screen password',
        '• Keeping your phone\'s OS updated',
        '• Only downloading StatusSaver from official sources (Google Play Store)',
        'For the minimal data we do collect (crash reports), we use industry-standard encryption in transit.'
      ]
    },
    {
      id: 'your-rights',
      icon: '✊',
      title: 'Your Rights',
      tldr: 'You have full control. Delete the app, delete your data. Simple.',
      content: [
        'You have the right to:',
        '• <strong>Access:</strong> See what data we have (spoiler: almost nothing)',
        '• <strong>Delete:</strong> Request deletion of any data we have',
        '• <strong>Opt-out:</strong> Disable analytics in app settings',
        '• <strong>Export:</strong> Your saved statuses are already in your gallery!',
        'To exercise these rights, just email us at privacy@statussaver.app'
      ]
    },
    {
      id: 'changes',
      icon: '📝',
      title: 'Changes to This Policy',
      tldr: 'If we change anything, we\'ll let you know in the app.',
      content: [
        'We may update this privacy policy from time to time.',
        'If we make significant changes, we\'ll notify you through the app.',
        'We\'ll also update the "Last Updated" date at the top of this page.',
        'We encourage you to review this policy periodically.'
      ]
    },
    {
      id: 'contact',
      icon: '📧',
      title: 'Questions? We\'re Here to Help',
      tldr: 'Reach out anytime. We actually read and respond to emails!',
      content: [
        'Have questions about this privacy policy? We\'d love to hear from you!',
        '<strong>Email:</strong> privacy@statussaver.app',
        '<strong>Response time:</strong> Usually within 24-48 hours',
        'We believe in transparency and open communication. If something in this policy is unclear, let us know and we\'ll clarify it!'
      ]
    }
  ];

  toggleSection(sectionId: string): void {
    const expanded = this.expandedSections();
    const newExpanded = new Set(expanded);

    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }

    this.expandedSections.set(newExpanded);
  }

  isSectionExpanded(sectionId: string): boolean {
    return this.expandedSections().has(sectionId);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
