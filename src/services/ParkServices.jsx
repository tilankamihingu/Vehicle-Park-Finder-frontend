import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/parks";

class ParkService {
   getParks(){
       return axios.get(EMPLOYEE_API_BASE_URL);
   }
}

export default new  ParkService()