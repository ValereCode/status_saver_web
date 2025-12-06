import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface TermsSection {
  id: string;
  icon: string;
  title: string;
  tldr: string;
  content: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-terms',
  imports: [CommonModule, RouterLink],
  templateUrl: './terms.html',
  styleUrl: './terms.css'
})
export class Terms {
  protected readonly lastUpdated = '6 December 2025';
  protected readonly expandedSections = signal<Set<string>>(new Set(['acceptance']));

  protected readonly sections: TermsSection[] = [
    {
      id: 'acceptance',
      icon: '🤝',
      title: 'Acceptance of Terms',
      tldr: 'By using StatusSaver, you agree to these terms. Simple as that.',
      content: [
        'By downloading, accessing, or using the StatusSaver application ("the App"), you agree to be bound by these Terms of Use.',
        'If you disagree with any part of these terms, please do not use our application.',
        'These terms apply to all visitors, users, and others who access or use the Service.'
      ],
      highlight: true
    },
    {
      id: 'license',
      icon: '📜',
      title: 'License & Usage',
      tldr: 'It\'s free to use, but don\'t try to reverse engineer it or sell it.',
      content: [
        'We grant you a personal, non-exclusive, non-transferable, limited license to usage of the app strictly in accordance with the terms of this agreement.',
        '<strong>You agree NOT to:</strong>',
        '• Modify, decrypt, reverse compile or reverse engineer the App',
        '• Use the App for any commercial purpose without our prior written consent',
        '• Use the App in any way that violates any applicable local, national, or international law or regulation'
      ]
    },
    {
      id: 'content',
      icon: '📸',
      title: 'User Content & Copyright',
      tldr: 'Respect others\' content. You are responsible for what you save and share.',
      content: [
        'StatusSaver is a tool for personal content management. We do not create, host, or own the statuses you view or save.',
        'You acknowledge and agree that:',
        '• You are solely responsible for the content you save or share using the App',
        '• You must respect the intellectual property rights of others',
        '• You should obtain permission from the content owner before saving or sharing their content',
        'We are not responsible for any copyright infringement or violation of personal rights resulting from your use of the App.'
      ]
    },
    {
      id: 'disclaimer',
      icon: '⚠️',
      title: 'Disclaimer',
      tldr: 'The app is provided "as is". We\'re not affiliated with WhatsApp.',
      content: [
        '<strong>Not affiliated with WhatsApp:</strong> StatusSaver is an independent application and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with WhatsApp Inc.',
        'The app is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the operation of the app or the information, content, or materials included.',
        'We do not guarantee that the App will function uninterrupted or be error-free.'
      ],
      highlight: true
    },
    {
      id: 'liability',
      icon: '⚖️',
      title: 'Limitation of Liability',
      tldr: 'We\'re not liable for any damages arising from your use of the app.',
      content: [
        'In no event shall StatusSaver, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:',
        '• Your access to or use of or inability to access or use the Service',
        '• Any conduct or content of any third party on the Service',
        '• Any content obtained from the Service'
      ]
    },
    {
      id: 'changes',
      icon: '🔄',
      title: 'Changes to Terms',
      tldr: 'We can change these terms. Check back occasionally.',
      content: [
        'We reserve the right, at our sole discretion, to modify or replace these Terms at any time.',
        'By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.'
      ]
    },
    {
      id: 'contact',
      icon: '📧',
      title: 'Contact Us',
      tldr: 'Got questions? Email us.',
      content: [
        'If you have any questions about these Terms, please contact us.',
        '<strong>Email:</strong> support@statussaver.app',
        'We aim to respond to all inquiries within 48 hours.'
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
