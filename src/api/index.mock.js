export async function getUser() {
  return {
    status: 200,
    data: {
      id: 1,
      email: "email@email.email",
      password: "123",
      name: "David Öman",
      role: "customer",
      street: "Tokitokvägen 3",
      zip: "123 45",
      city: "Tokberga",
    },
  };
}

export async function authUser() {
  return {
    status: 200,
    data: "12345",
  };
}

export async function registerUser() {
  return {
    status: 200,
  };
}
