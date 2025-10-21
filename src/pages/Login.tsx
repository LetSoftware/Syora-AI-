import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Clickable Logo */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center justify-start cursor-pointer mb-8"
          >
            <img
              src="/logo.jpg"
              alt="SYORA Logo"
              className="w-32 h-32 object-contain rounded-lg"
            />
          </div>

          {/* Welcome Back */}
          <h1 className="text-3xl font-normal mb-8">Welcome Back</h1>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            />

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-full font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Continue'}
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </button>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 py-4 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-gray-700 font-medium text-sm">Continue with Google</span>
          </button>
        </div>
      </div>

      {/* Right Side - Feature Display */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-600 p-12 relative overflow-hidden">
        <div className="relative z-10 text-white h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Search through every post<br />
            made about the item you<br />
            want, at the speed of light.
          </h2>

          {/* Product Images */}
          <div className="mt-8 space-y-4">
            <div className="w-64 h-48 rounded-t-2xl overflow-hidden shadow-2xl transform rotate-3 bg-yellow-400">
              <img src="/Nike.jpg" alt="Nike sneakers with red and yellow colors" className="w-full h-full object-cover rounded-t-2xl" />
            </div>
            <div className="w-48 h-36 rounded-t-2xl overflow-hidden shadow-2xl transform -rotate-2 ml-32 bg-gray-200">
              <img src="/Home.jpg" alt="Modern house architecture" className="w-full h-full object-cover rounded-t-2xl" />
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-purple-300 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
