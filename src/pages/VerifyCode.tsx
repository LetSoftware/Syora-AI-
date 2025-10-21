import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function VerifyCode() {
  const [code, setCode] = useState(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const token = code.join('');
    if (token.length !== 5) {
      setError('Please enter the complete code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token,
        type: 'email',
      });

      if (error) throw error;

      navigate('/create-password', { state: { email } });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
      });
      if (error) throw error;
      alert('Code resent to your email');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const maskEmail = (email: string) => {
    if (!email) return '';
    const [local, domain] = email.split('@');
    const maskedLocal = local.slice(0, 3) + '***';
    return `${maskedLocal}@${domain}`;
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
          {/* Title */}
          <h1 className="text-3xl font-normal text-center mb-3">We sent you a code</h1>
          <p className="text-center text-gray-500 text-sm mb-12">
            Enter the verification code sent to<br />
            {maskEmail(email)}
          </p>

          {/* Code Input */}
          <div className="flex justify-center gap-3 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-2xl font-semibold rounded-2xl border-2 border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ))}
          </div>

          {/* Resend Link */}
          <p className="text-center text-sm text-gray-600 mb-8">
            Didn't get a code?{' '}
            <button
              onClick={handleResend}
              disabled={loading}
              className="text-blue-600 font-medium hover:underline disabled:opacity-50"
            >
              Resend Code
            </button>
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={loading || code.join('').length !== 5}
            className="w-full bg-blue-600 text-white py-4 rounded-full font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </div>
      </div>

      {/* Bottom Blue Section */}
      <div className="h-48 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-600 rounded-t-[4rem]"></div>
    </div>
  );
}
