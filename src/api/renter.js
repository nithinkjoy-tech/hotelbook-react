import apiClient from "./httpService";

export function getRenterHotels(){
    return apiClient.get("/renter/hotel");
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

export function addRoom(values){
    return apiClient.post("/renter/room", values);
}

export function editHotelbyId(values,id){
    return apiClient.put(`/renter/hotel/${id}`,values);
}