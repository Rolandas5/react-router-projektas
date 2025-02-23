import './contactspage.css';
import { ContactsInfo } from './ContactsInfo';
import ContactForm from './ContactForm';

export function ContactsPage() {
  return (
    <div className="contacts-page">
      <ContactForm />
      <ContactsInfo />
    </div>
  );
}
