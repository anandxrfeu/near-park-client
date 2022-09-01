import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_BASE,
    });

    this.api.interceptors.request.use((config) => {
      console.log("in interceptor..")
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
    const res =  await this.api.get("/users/profile");
    return res.data
  }

  async updateUserProfile(user) {
    const res =  await this.api.patch("/users/profile", user);
    return res.data
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

    async getAReservation(id) {
    const res = await this.api.get(`/reservations/${id}`);
    return res.data
  }

  async updateAReservation(id, reservation) {
    const res = await this.api.patch(`/reservations/${id}`, reservation);
    return res.data
  }

  async createReservation(reservation) {
    const res = await this.api.post("/reservations", reservation);
    return res.data
  }

  async createParkingLot(parkingLot) {
    const res = await this.api.post("/parkingLots", parkingLot);
    return res.data
  }

  async updateParkingLot(parkingLotId, parkingLot) {
    const res = await this.api.patch(`/parkingLots/${parkingLotId}`, parkingLot);
    return res.data
  }

  async createSubscription (subscriptionPlan) {
    const res = await this.api.post("/subscriptionPlans", subscriptionPlan);
    return res.data
  }

  async getAllActiveSubscriptions () {
    const res = await this.api.get("/subscriptionPlans?active=true");
    return res.data
  }

  async subscribeToPlan (plan) {
    const res = await this.api.post("/userSubscriptions", plan);
    return res.data
  }

  async getActiveSubscriptionForUser (plan) {
    const res = await this.api.get("/users/profile/subscriptions?status=ACTIVE");
    return res.data
  }

  async getAllUsers() {
    const res = await this.api.get("/users?role=OWNER");
    return res.data
  }

  async toggleUserAccess(id, payload) {
    const res = await this.api.patch(`/users/${id}`, payload);
    return res.data
  }

  async getUserSubscptionDetails(id) {
    const res = await this.api.get(`/userSubscriptions/${id}`);
    return res.data
  }

  async getAllUserSubscptionDetails(id) {
    const res = await this.api.get("/userSubscriptions");
    return res.data
  }



}

export default new ApiService();
