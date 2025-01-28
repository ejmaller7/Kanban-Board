import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Failed to log in. Check your credentials.');
    }

    const data = await response.json();

    return data; // Should contain the token if login is successful.
  } catch (error) {
    console.error('Error during login:', error);
    return Promise.reject('Unable to authenticate.');
  }
};

export { login };