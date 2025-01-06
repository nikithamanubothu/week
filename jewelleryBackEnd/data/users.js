import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Tira Smith",
    email: "tira@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Diamond Smith",
    email: "diamond@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
