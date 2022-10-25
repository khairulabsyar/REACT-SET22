import users from "../db/users";

export const loginAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      token: users[0].token,
      user: users[0]
    }), 500);
  });
} 