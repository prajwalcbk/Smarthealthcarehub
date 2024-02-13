import Home_Navbar from './Navbar';
import Quote from './Quote';
import Category from './Category'

function Home() {
  return (
    <div className="Home">
      <Home_Navbar/>
      <Quote/>
      <Category/>
    </div>
  );
}

export default Home;