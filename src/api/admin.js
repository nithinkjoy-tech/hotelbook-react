import apiClient from "./httpService";

export function getHotels(values){
    return apiClient.get("/guest/book", values);
}

export function getAdmin(values){
    return apiClient.get("/admin/signin", values);
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

export function editAdminData(values){
    return apiClient.put("/admin/signup", values);
}

export function getAdminHotels(values){
    return apiClient.get("/admin/hotel",values);
}

export function getHotelRooms(id){
    return apiClient.get(`/admin/room?hotelId=${id}`);
}

export function getAdminRoomById(id){
    return apiClient.get(`/admin/room/${id}`);
}

export function addRoom(values){
    return apiClient.post("/admin/room", values);
}

export function editRoomById(values,id){
    return apiClient.put(`/admin/room/${id}`,values);
}

export function registerHotels(values){
    return apiClient.post("/admin/hotel", values);
}

export function getAdminHotelsbyId(id){
    return apiClient.get(`/admin/hotel/${id}`);
}

export function editHotelById(values,id){
    return apiClient.put(`/admin/hotel/${id}`,values);
}