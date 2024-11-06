import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/utensils";
import { addRoom } from "../../../api/rooms";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
    const navigate = useNavigate();
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const handleSubmit = async event => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const from = dates.startDate;
        const to = dates.endDate;
        const price = form.price.value;
        const guests = form.total_guest.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        const bedrooms = form.bedrooms.value;
        const image = form.image.files[0];
        const image_url = await imageUpload(image);
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email

        };
        const roomData = {location,category,title,from,to,price,guests,bathrooms,description,bedrooms,image: image_url?.data?.display_url,host};

        try{
            const result = await addRoom(roomData);
            setUploadButtonText('Uploaded!');
            toast.success('Room added successfully');
            navigate('/dashboard/my-listings')
        }catch(err){
            console.log(err);
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    };

    // set date range manually from calendar
    const handleDateRange = ranges => {
        setDates(ranges.selection);
    }

    const handleImageChange = image =>{
        setUploadButtonText(image.name);
    }
    return (
        <div>
            <Helmet>
                <title>Add Room | Dashboard</title>
            </Helmet>
            {/* Form */}
            <AddRoomForm
                handleSubmit={handleSubmit}
                dates={dates}
                handleDates={handleDateRange}
                handleImageChange={handleImageChange}
                loading={loading}
                uploadButtonText={uploadButtonText}
            >
            </AddRoomForm>

        </div>
    );
};

export default AddRoom;