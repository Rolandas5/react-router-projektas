import './contactspage.css';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export function ContactsPage() {
  return (
    <div className="contacts-page">
      <ContactForm />
      <ContactInfo />
    </div>
  );
}
