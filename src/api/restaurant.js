import apiClient from "./httpService";

export function getCurrentlyStaying(values) {
  return apiClient.get("/restaurant/booking/staying", values);
}

export function restaurantSignin(values) {
  return apiClient.post("/restaurant/signin", values);
}
