import apiClient from "./httpService";

export function getRenterHotels(values){
    return apiClient.get("/renter/hotel",values);
}

export function getRenterHotelsbyId(id){
    return apiClient.get(`/renter/hotel/${id}`);
}

export function registerHotels(values){
    return apiClient.post("/renter/hotel", values);
}

export function renterSignin(values){
    return apiClient.post("/renter/signin", values);
}

export function renterSignup(values){
    return apiClient.post("/renter/signup", values);
}

export function getHotelRooms(id){
    return apiClient.get(`/renter/room?hotelId=${id}`);
}

export function getRenterRoomById(id){
    return apiClient.get(`/renter/room/${id}`);
}

export function addRoom(values){
    return apiClient.post("/renter/room", values);
}

export function editHotelById(values,id){
    return apiClient.put(`/renter/hotel/${id}`,values);
}

export function editRoomById(values,id){
    return apiClient.put(`/renter/room/${id}`,values);
}

export function renterChangePassword(values){
    return apiClient.post("/renter/changePassword", values);
}

export function getRenter(values){
    return apiClient.get("/renter/signin", values);
}

export function getBookings(isStayCompleted){
    return apiClient.get("/renter/bookings",isStayCompleted);
}

export function editRenterData(values){
    return apiClient.put("/renter/signup", values);
}