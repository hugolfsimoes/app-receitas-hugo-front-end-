const verifyFields = () => {
  const { name, email, password } = inputValues;
  const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (name.length < 3) return { message: 'The name must contain more than three characters' };
  if (!regEmail.test(email)) return { message: 'Must be a valid email' };
  if (password.length < 8) return { message: 'Password must contain at least 8 characters' };
  return true;
};

module.exports = { verifyFields };