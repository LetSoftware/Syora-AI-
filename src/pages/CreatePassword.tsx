import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { CheckCircle } from 'lucide-react';

export default function CreatePassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Logo */}
      <div className="p-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-md grid grid-cols-2 gap-0.5 p-0.5">
              <div className="bg-pink-500 rounded-sm"></div>
              <div className="bg-purple-500 rounded-sm"></div>
              <div className="bg-blue-500 rounded-sm"></div>
              <div className="bg-purple-600 rounded-sm"></div>
            </div>
          </div>
          <span className="font-bold text-xl">SYORA</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-start pt-20">
        <div className="w-full max-w-md px-8">
          {/* Success Message */}
          <div className="flex items-center justify-center gap-2 mb-12">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h1 className="text-2xl font-normal">Email Verified</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              required
            />

            <input
              type="password"
              placeholder="Confirm your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        </div>
      </div>

      {/* Bottom Blue Section */}
      <div className="h-48 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-600 rounded-t-[4rem]"></div>
    </div>
  );
}
