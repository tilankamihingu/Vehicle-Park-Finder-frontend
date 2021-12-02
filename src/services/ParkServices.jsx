import axios from "axios";

const PARK_API_BASE_URL = "http://localhost:8080/api/v1";
// const SEARCH_API_BASE_URL = "http://localhost:8080/api/v1";

class ParkService {
   getParks(){
       return axios.get(`${PARK_API_BASE_URL}/parks`);
   }

   createPark(park){
       return axios.post(`${PARK_API_BASE_URL}/parks`, park);
   }

   getParkById(parkId){
       return axios.get(`${PARK_API_BASE_URL}/parks/${parkId}`);
   }

   updatePark(park, parkId){
       return axios.put(`${PARK_API_BASE_URL}/parks/` + parkId, park);
   }

   deletePark(parkId){
       return axios.delete(`${PARK_API_BASE_URL}/parks/${parkId}`);
   }

   search(query){
       return axios.get(PARK_API_BASE_URL + `/park?name=${query}`);
   }

   getParkByName(query){
       return axios.get(PARK_API_BASE_URL + `/park?name=${query}`);
   }
}

export default new  ParkService()