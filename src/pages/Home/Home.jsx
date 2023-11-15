import { Helmet } from "react-helmet-async";
import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {

  return (
    <Container>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      <div>
        {/* categories section */}
        <Categories></Categories>
        {/* room section */}
        <Rooms></Rooms>
      </div>
    </Container>
  );
}

export default Home
