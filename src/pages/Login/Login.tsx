import { useState } from 'react';
import { validate } from '../../utils/validate';
import { signInWithGoogle } from '../../firebase/service/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../slices/UserSlice/UserSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate(email, password, setErrors)) {
      console.log('Форма отправлена', { email, password });
    }
  };
  const handleLogin = async () => {
    try {
      const { accessToken, displayName, email, photoURL, uid } =
        await signInWithGoogle();
      console.log(
        'Пользователь вошёл:',
        accessToken,
        displayName,
        email,
        photoURL,
        uid,
      );
      const userData = {
        isAuth: true,
        displayName,
        email,
        photoURL,
        uid,
      };
      localStorage.setItem('accessToken', accessToken);
      // Здесь можно сохранить данные пользователя в глобальное состояние
      // или перенаправить на защищённый маршрут
      dispatch(setAuth(userData));
      navigate('/');
    } catch (error) {
      console.error('Ошибка авторизации:', error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div>
          <h2>Вход в приложение</h2>
          <button
            onClick={handleLogin}
            className="px-4 py-3 border-2 rounded-3xl bg-amber-800 cursor-pointer"
          >
            Войти через Google
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center">Вход</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите ваш email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Пароль
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите ваш пароль"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Войти
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Нет аккаунта?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
