export const authenticate = async (userData) => {
    const { username, email, password } = userData;
  
    if (!username || !email || !password) {
      return { success: false, message: "All fields are required." };
    }
  
    if (password.length < 6) {
      return { success: false, message: "Password must be at least 6 characters long." };
    }
  
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true, message: "Signup successful! You can now log in." };
    } catch (error) {
      return { success: false, message: "Signup failed. Please try again." };
    }
  };
  