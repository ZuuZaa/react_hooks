const User = (user, changeColor) => {
  return (
    <div className="user">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <label htmlFor="color">Color:</label>
      <input
        type="text"
        value="value"
        onChange={(e) => changeColor(user.id, e.target.value)}
      />
    </div>
  );
};

export default User;
