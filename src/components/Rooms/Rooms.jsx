import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { getAllRooms } from "../../api/rooms";


const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [params, setParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const category = params.get("category");


  useEffect(() => {
    setLoading(true)
      getAllRooms()
      .then(data => {
        if (category) {
          const filtered = data.filter(room => room.category === category)
          setRooms(filtered)
          setLoading(false)
        }
        else setRooms(data)
        setLoading(false)
      })
  }, [category]);
  if (loading) return <Loader></Loader>

  return (
    <Container>
      {rooms && rooms.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {rooms.map((room) => (
            <Card key={room._id} room={room}></Card>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available in this category"
            subtitle="Please select other categories"
          ></Heading>
        </div>
      )}
    </Container>
  );
};

export default Rooms;