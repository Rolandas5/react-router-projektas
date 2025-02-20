import './ContactsPage.css';

export function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Draugaukime 🐶 !</h2>
      <p>Mėgstame kurti dalykus su įdomiai keliaujančiais žmonėmis!</p>
      <form>
        <input type="text" placeholder="Jūsų vardas" required />
        <input type="email" placeholder="Jūsų el. paštas" required />
        <textarea placeholder="Žinutė" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
