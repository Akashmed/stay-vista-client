import { Helmet } from "react-helmet-async";
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {

  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <div>
        {/* categories section */}
        <Categories></Categories>
        {/* room section */}
        <Rooms></Rooms>
      </div>
    </div>
  );
}

export default Home
