import { InfoCard } from './components/InfoCard';
import './homepage.css';

export const HomePage = () => {
  return (
    <section className="home">
      <h1>Homepage</h1>
      <div className="featured-content">
        <InfoCard
          title={'Latest News'}
          description={'Stay updated with our newest features.'}
        />
        <InfoCard
          title={'Popular Articles'}
          description={'Check out our mos popular articles'}
        />
      </div>
    </section>
  );
};
