import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient'; 

export const metadata: Metadata = {
  title: 'Contact Me | Aashis Portfolio',
  description: 'Get in touch with Aashis. Send a message via the contact form or connect through social media for collaborations, questions, or hellos.',
 
  openGraph: {
    title: 'Contact Me | Aashis Portfolio',
    description: 'Reach out to Aashis for web development projects or inquiries.',
  },
};

// This is the main server component for the contact page.
export default function ContactPage() {
  return <ContactPageClient />;
}
