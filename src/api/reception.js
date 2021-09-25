import apiClient from "./httpService";

// export function getRenterHotels(values) {
//   return apiClient.get("/renter/hotel", values);
// }

export function receptionSignin(values) {
  return apiClient.post("/reception/signin", values);
}

export function offlineGuestSignup(values) {
  return apiClient.post("/reception/offlinesignup", values);
}

export function offlineGuestCheck(values) {
  return apiClient.get("/reception/offlinesignup", values);
}

export function cancelBooking(bookingId) {
  return apiClient.delete(`/reception/booking/${bookingId}`);
}

export function bookOfflineHotel(values) {
  return apiClient.post("/reception/booking", values);
}

// export function registerHotels(values) {
//   return apiClient.post("/renter/hotel", values);
// }

// export function getRenterHotelsbyId(id) {
//   return apiClient.get(`/renter/hotel/${id}`);
// }

export function downloadInvoice(bookingId) {
  return apiClient.get(`/reception/booking/downloadInvoice/${bookingId}`);
}

// export function editHotelById(values, id) {
//   return apiClient.put(`/renter/hotel/${id}`, values);
// }

export function receptionSignup(values) {
  return apiClient.post("/reception/signup", values);
}

// export function restaurantSignup(values) {
//   return apiClient.post("/restaurant/signup", values);
// }

export function getReception(values) {
  return apiClient.get("/reception/signin", values);
}

// export function getRestaurant(values) {
//   return apiClient.get("/restaurant/signin", values);
// }

// export function editRestaurantData(values) {
//   return apiClient.put("/restaurant/signup", values);
// }

export function editReceptionData(values) {
  return apiClient.put("/reception/signup", values);
}

// export function getHotelRooms(id) {
//   return apiClient.get(`/renter/room?hotelId=${id}`);
// }

// export function getRenterRoomById(id) {
//   return apiClient.get(`/renter/room/${id}`);
// }

// export function addRoom(values) {
//   return apiClient.post("/renter/room", values);
// }

// export function editRoomById(values, id) {
//   return apiClient.put(`/renter/room/${id}`, values);
//}

export function receptionChangePassword(values) {
  return apiClient.post("/reception/changePassword", values);
}

// export function restaurantChangePassword(values) {
//   return apiClient.post("/restaurant/changePassword", values);
// }

// export function getRenter(values) {
//   return apiClient.get("/renter/signin", values);
// }

export function getBookings(values) {
  return apiClient.get("/reception/booking/todays", values);
}

export function getCompletedStays(values) {
  return apiClient.get("/reception/booking/completed", values);
}

export function getCurrentlyStaying(values) {
  return apiClient.get("/reception/booking/staying", values);
}

export function getBookingDetails(id) {
  return apiClient.get(`/reception/booking/details/${id}`);
}

export function checkIn(values) {
  return apiClient.post(`/reception/booking/checkin`,values);
}

export function checkOutDetails(id) {
  return apiClient.get(`/reception/booking/checkout/${id}`);
}

export function checkOut(id, values) {
  return apiClient.post(`/reception/booking/checkout/${id}`,values);
}

export function getUpcomingBookings(values) {
  return apiClient.get("/reception/booking/upcoming", values);
}

// export function editRenterData(values) {
//   return apiClient.put("/renter/signup", values);
// }