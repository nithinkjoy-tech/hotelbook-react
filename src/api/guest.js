import apiClient from "./httpService";

export function getHotels(values){
    return apiClient.get("/guest/book", values);
}

export function getHotel(id){
    return apiClient.get(`/guest/book/${id}`);
}

export function getGuest(values){
    return apiClient.get("/guest/signin", values);
}

export function guestSignin(values){
    return apiClient.post("/guest/signin", values);
}

export function guestSignup(values){
    return apiClient.post("/guest/signup", values);
}

export function editUserData(values){
    return apiClient.put("/guest/signup", values);
}

export function changePassword(values){
    return apiClient.post("/guest/changePassword", values);
}


