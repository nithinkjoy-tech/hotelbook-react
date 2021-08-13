import apiClient from "./httpService";

export function getHotels(values){
    return apiClient.get("/guest/book", values);
}

export function adminSignin(values){
    return apiClient.post("/admin/signin", values);
}

export function adminSignup(values){
    return apiClient.post("/admin/signup", values);
}

export function adminChangePassword(values){
    return apiClient.post("/admin/changePassword", values);
}