function Auth() {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          _token: "4234234234234234",
          _user: { name: "test user", email: "a@a.com", role: "admin" },
        }),
      1000
    );
  });
}

export default Auth;
