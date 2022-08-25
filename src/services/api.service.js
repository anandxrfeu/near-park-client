import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
    });

    this.api.interceptors.request.use((config) => {
      // Verifica se já temos as informações do usuário logado no localStorage
      const storedUser = localStorage.getItem("loggedInUser");

      const loggedInUser = JSON.parse(storedUser || '""');

      if (loggedInUser.token) {
        config.headers = {
          Authorization: `Bearer ${loggedInUser.token}`,
        };
      }

      return config;
    });
  }

  async signUp(user) {
    return await this.api.post("/users/signup", user);
  }

  async login(user) {
    return await this.api.post("/users/login", user);
  }

  async getUserProfile() {
    return await this.api.get("/users/profile");
  }

  async updateUserProfile(user) {
    return await this.api.patch("/users/profile", user);
  }

  async uploadFile(fileData){
    const res = await this.api.post('/imageUpload', fileData)
    return res.data
  }

  async getAllParkingLots() {
    const res = await this.api.get("/parkingLots");
    return res.data
  }

    async getAllReservationsForAParkingLot(id) {
    const res = await this.api.get(`/parkingLots/${id}/reservations`);
    return res.data
  }

    async createReservation(reservation) {
    const res = await this.api.post("/reservations", reservation);
    return res.data
  }

}

export default new ApiService();
