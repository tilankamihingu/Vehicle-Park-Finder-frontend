import axios from "axios";

const PARK_API_BASE_URL = "http://localhost:8080/api/v1/parks";
const SEARCH_API_BASE_URL = "http://localhost:8080/api/v1";

class ParkService {
   getParks(){
       return axios.get(PARK_API_BASE_URL);
   }

   createPark(park){
       return axios.post(PARK_API_BASE_URL, park);
   }

   getParkById(parkId){
       return axios.get(PARK_API_BASE_URL + '/' + parkId);
   }

   updatePark(park, parkId){
       return axios.put(PARK_API_BASE_URL + '/' + parkId, park);
   }

   deletePark(parkId){
       return axios.delete(PARK_API_BASE_URL + '/' + parkId);
   }

   search = (query) =>{
       return axios.get(SEARCH_API_BASE_URL + `/park?name=${query}`);
   }

   getParkByName(query){
       return axios.get(SEARCH_API_BASE_URL + `/park?name=${query}`);
   }
}

export default new  ParkService()