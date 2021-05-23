import apiClient from "./httpService";

export function getHotels(values){
    return apiClient.get("/guest/book", values);
}

export function guestSignin(values){
    return apiClient.post("/guest/signin", values);
}
