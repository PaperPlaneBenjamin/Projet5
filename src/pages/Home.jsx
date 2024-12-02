import LandscapeView from '../components/LandscapeView';
import Gallery from '../components/Gallery';
import landscape1 from '../assets/landscape1.jpg';
import '../styles/pages/home.scss';

function Home() {
  return (
    <div className="home">
      <div className="landscape-box">
        <LandscapeView
          image={landscape1}
          text="Chez vous, partout et ailleurs"
        />
      </div>
      <div className="cards-box">
        <div className="cards">
          <Gallery />
        </div>
      </div>
    </div>
  );
}
export default Home;
