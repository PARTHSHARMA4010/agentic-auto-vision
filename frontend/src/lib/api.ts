// src/lib/api.ts
import axios from 'axios';

// Connect to your Python Backend
const API_URL = "http://127.0.0.1:8000";

export const api = {
  // Check if user exists for Login
  login: async (userId: string, phone: string) => {
    try {
      // We try to fetch the dashboard data for this user
      const response = await axios.get(`${API_URL}/get-dashboard/${userId}`);
      
      // If user exists, check if phone number matches
      if (response.data && response.data.user_profile.phone === phone) {
        return { success: true, user: response.data.user_profile };
      } else {
        return { success: false, message: "Invalid Phone Number" };
      }
    } catch (error) {
      console.error("Login Error:", error);
      return { success: false, message: "User ID not found" };
    }
  }
};