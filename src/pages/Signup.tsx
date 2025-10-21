import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;
      navigate('/verify-code', { state: { email } });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
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
    <div className="h-screen overflow-hidden bg-white flex flex-col">
      {/* Logo */}
      <div
        onClick={() => navigate('/')}
        className="flex items-center justify-start px-8 pt-4 cursor-pointer"
      >
        <img
          src="/logo.jpg"
          alt="SYORA Logo"
          className="w-32 h-32 object-contain rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-5">
        <div className="w-full max-w-md px-8">
          {/* Title */}
          <h1 className="text-3xl font-normal text-center mb-8">
            Create an Account
          </h1>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </button>
          </p>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            disabled={loading}
            className="w-full flex items-center justify-center space-x-3 py-4 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors disabled:opacity-50 mb-8"
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
            <span className="text-gray-700 font-medium text-sm">
              Continue with Google
            </span>
          </button>
        </div>
      </div>

      {/* Bottom Blue Section */}
      <div className="relative w-4/5 h-[40vh] mx-auto rounded-t-3xl overflow-hidden shadow-lg">
        <img
          src="/hero-bg.jpg"
          alt="Hero banner showing social commerce connection visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 mix-blend-overlay"></div>
      </div>
    </div>
  );
}
