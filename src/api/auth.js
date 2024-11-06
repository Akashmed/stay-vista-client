import axiosSecure from ".";

// save user data to database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'guest',
        status: 'Verified'
    };

    // Use await to ensure the request is completed before destructuring
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

    return data;
};

// get token 
export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', {email});

    return data;
}

// clear cookie from browser
export const removeCookie = async () => {
    const { data } = await axiosSecure.get('/logout');

    return data;
}

// get user's role
export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`);
    return data?.role;
}

// get all users from db
export const getAllUsers = async() =>{
    const {data} = await axiosSecure('/users');
    return data ;
}

// update user role
export const updateRole = async ({email, role}) => {
    const currentUser = {
        email,
        role,
        status: 'Verified'
    };
    const { data } = await axiosSecure.put(`/users/update/${email}`, currentUser);

    return data;
};

// request to become host
export const becomeHost = async email =>{
    const currentUser = {
        email,
        status: 'requested'
    };
    const { data } = await axiosSecure.put(`/users/${email}`, currentUser);

    return data;
}