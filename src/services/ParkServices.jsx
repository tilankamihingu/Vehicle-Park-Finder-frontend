import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/parks";

class ParkService {
   getParks(){
       return axios.get(EMPLOYEE_API_BASE_URL);
   }

   createPark(park){
       return axios.post(EMPLOYEE_API_BASE_URL, park);
   }

   getParkById(parkId){
       return axios.get(EMPLOYEE_API_BASE_URL + '/' + parkId);
   }

   updatePark(park, parkId){
       return axios.put(EMPLOYEE_API_BASE_URL + '/' + parkId, park);
   }

   deletePark(parkId){
       return axios.delete(EMPLOYEE_API_BASE_URL + '/' + parkId);
   }
}

export default new  ParkService()