import apiClient from "./httpService";

export function getCurrentlyStaying(values) {
  return apiClient.get("/restaurant/booking/staying", values);
}

export function getFoodItems() {
  return apiClient.get("/restaurant/booking/fooditems");
}

export function saveFoodItems(values) {
  return apiClient.post("/restaurant/booking/fooditems",values);
}

export function addFoodItemstoBill(values) {
  return apiClient.post("/restaurant/booking/addtobill",values);
}

export function restaurantSignin(values) {
  return apiClient.post("/restaurant/signin", values);
}
