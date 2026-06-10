const { users } = require('../data/mockDb');
const jwt = require('jsonwebtoken');

const loginUser = async (email, password) => {
  // In a real application, you would check against a database and use bcrypt to compare hashes
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || 'fallback_secret_key',
    { expiresIn: '2h' }
  );

  return { token, user: { id: user.id, email: user.email } };
};

module.exports = { loginUser };
