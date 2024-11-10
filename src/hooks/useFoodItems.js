import api from "../constants/api";

const useFoodItems = () => {
  const fetchFoodItems = async () => {
    try {
      const response = await api.get("/api/fooditems");

      if (response?.data) {
        const data = response.data;

        return data.statusText === "success" ? data.foodItems : [];
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error from  register", error);
      return false;
    }
  };

  const fetchFoodItemsByOwnerId = async (ownerId) => {
    try {
      if (ownerId == null) {
        return;
      }
      const response = await api.get(`/api/fooditems/${ownerId}`);

      if (response?.data) {
        const data = response.data;

        return data.statusText === "success" ? data.foodItems : [];
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error from  register", error);
      return false;
    }
  };

  const addFoodItem = async (payload) => {
    try {
      const data = JSON.stringify(payload);

      const response = await api.post("/api/fooditems", data);

      if (response?.data) {
        const data = response.data;

        return data.statusText === "success" ? true : false;
      } else {
        return false;
      }
    } catch (error) {
      console.log("Error from useAuth's register", error);
      return false;
    }
  };

  return {
    fetchFoodItems,
    fetchFoodItemsByOwnerId,
  };
};

export default useFoodItems;
