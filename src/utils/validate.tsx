export const validate = (
  email: string,
  password: string,
  setError: React.Dispatch<
    React.SetStateAction<{ email?: string; password?: string }>
  >,
) => {
  const newErrors: { email?: string; password?: string } = {};
  if (!email) {
    newErrors.email = 'Email обязателен';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Введите корректный email';
  }
  if (!password) {
    newErrors.password = 'Пароль обязателен';
  } else if (password.length < 6) {
    newErrors.password = 'Пароль должен содержать минимум 6 символов';
  }
  setError(newErrors);
  return Object.keys(newErrors).length === 0;
};
