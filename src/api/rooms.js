import axiosSecure from "."

// get all rooms data
export const getAllRooms = async() =>{
    const {data} = await axiosSecure('/rooms');
    return data ;
}

// get all rooms for specific host
export const getHostRooms = async email =>{
    const {data} = await axiosSecure(`/rooms/${email}`);
    return data ;
}

// get single room data
export const getRoom = async id =>{
    const {data} = await axiosSecure(`/room/${id}`);
    return data ;
}

// add room
export const addRoom = async room =>{
    const {data} = await axiosSecure.post(`/rooms`, room);
    return data ;
}