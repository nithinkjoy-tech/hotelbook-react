import apiClient from "./httpService";

export function registerHotels(values){
    return apiClient.post("/renter/hotel", values);
}

export function renterSignin(values){
    return apiClient.post("/renter/signin", values);
}

export function renterSignup(values){
    return apiClient.post("/renter/signup", values);
}
