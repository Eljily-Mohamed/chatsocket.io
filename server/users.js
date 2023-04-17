let users = [];

const addUser = ({ id, nameUser, roomName }) => {
  nameUser = nameUser.trim().toLowerCase();
  roomName = roomName.trim().toLowerCase();
  // check if user already exists
  let userExist = users.find(
    (user) =>
      user.id === user.id &&
      user.nameUser === nameUser &&
      user.roomName === roomName
  );
  if (userExist) {
    return { error: "user already exists" };
  }
  const user = { id, nameUser, roomName };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1);
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getAllUsers = (roomName) =>
  users.filter((user) => user.roomName === roomName);

module.exports = {
  addUser,
  removeUser,
  getAllUsers,
  getUser,
};
