import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"
import Container from "../../components/Shared/Container"

const Home = () => {

  return (
    <Container>
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
