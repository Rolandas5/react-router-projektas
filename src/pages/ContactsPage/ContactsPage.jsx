import './contactspage.css';
import { ContactForm } from './ContactForm';
import { ContactsInfo } from './ContactsInfo';

export function ContactsPage() {
  return (
    <div className="contacts-page">
      <ContactForm />
      <ContactsInfo />
    </div>
  );
}
