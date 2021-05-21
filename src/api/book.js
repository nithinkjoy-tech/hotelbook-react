import apiClient from "./client";

export function getHotels(values){
    return apiClient.get("/guest/book", values);
}
