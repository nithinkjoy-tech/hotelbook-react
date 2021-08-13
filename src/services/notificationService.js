import {toast} from "react-toastify";

export function displayNotification(type,message){
    toast.dismiss()
    toast[`${type}`](message)
}

export function dismissNotification(){
    toast.dismiss()
}