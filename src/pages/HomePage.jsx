import Hero from '../components/Hero';
import Homecards from '../components/Homecards';
import Joblistings from '../components/Joblistings';
import Viewalljobs from '../components/Viewalljobs';


const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Homecards/>
        <Joblistings isHome={true} />
        <Viewalljobs/>
    </div>
  )
}

export default HomePage;