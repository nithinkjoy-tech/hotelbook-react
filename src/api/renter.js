import apiClient from "./httpService";

export function getHotels(values){
    return apiClient.get("/renter/book", values);
}

export function renterSignin(values){
    return apiClient.post("/renter/signin", values);
}

export function renterSignup(values){
    return apiClient.post("/renter/signup", values);
}
