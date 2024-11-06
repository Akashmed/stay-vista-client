/* eslint-disable react/prop-types */
import Calendar from "./Calendar";
import Button from "../../components/Button/Button"
import { formatDistance } from "date-fns";
import { useState } from "react";
import BookingModal from "../Modal/BookingModal";
import useAuth from "../../hooks/useAuth";

const RoomReservation = ({ room }) => {
    const {user} = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () =>{
        setIsOpen(false);
    }
    // this optional conditioning is must otherwise invalid error will arise due to immediate unavailability of data
    const to = room?.to ? new Date(room.to) : null;
    const from = room?.from ? new Date(room.from) : null;
    
    const totalDays = parseInt(
        formatDistance(new Date(to), new Date(from)).split(' ')[0]
    );
    const totalPrice = totalDays * room?.price;

    const [value, setValue] = useState({
        startDate: from,
        endDate: to,
        key: 'selection'
    });

    const handleChange = () =>{
        setValue({
            startDate: from,
            endDate: to,
            key: 'selection'
        })
    }

    const [bookingInfo, setBookingInfo] = useState({
        guest:{
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL
        },
        host: room?.host?.email,
        location: room?.location,
        price: totalPrice,
        to: value.endDate,
        from: value.startDate,
        title: room?.title,
        roomId: room?._id,
        image: room?.image
    })

    return (
        <div className="rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white">
            <div className="flex items-center gap-1 p-4">
                <div className="text-2xl font-semibold">$ {room?.price}
                </div>
                <div className="font-light text-neutral-600">
                    night
                </div>
            </div>
            <hr></hr>
            <div className="flex justify-center">
                <Calendar value={value} handleChange={handleChange}></Calendar>
            </div>
            <hr></hr>
            <div className="p-4">
                <Button disabled={room.host.email === user.email || room.booked} onClick={()=>setIsOpen(true)} label={'Reserve'}></Button>
            </div>
            <hr></hr>
            <div className="p-4 flex items-center justify-between font-semibold text-lg">
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
            <BookingModal closeModal={closeModal} bookingInfo={bookingInfo} isOpen={isOpen} />
        </div>
    );
};

export default RoomReservation;