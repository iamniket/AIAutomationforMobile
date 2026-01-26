import { useState, FormEvent, ChangeEvent } from 'react';
import { Eye, EyeOff, Lock, Mail, AlertCircle } from 'lucide-react';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email === '' || password === '') {
        setError('Please fill in all fields');
      } else if (!email.includes('@')) {
        setError('Please enter a valid email address');
      } else {
        console.log('Login successful', { email, rememberMe });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div
      className="min-h-screen flex flex-col px-6 py-8"
      data-testid="login-screen-container"
      data-automation-id="screen_login"
      aria-label="screen_login"
    >

      {/* Header */}
      <div className="text-center mb-10 mt-12">
        <div
          className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          data-testid="app-logo"
          data-automation-id="img_app_logo"
          aria-label="img_app_logo"
        >
          <Lock className="w-8 h-8 text-white" />
        </div>

        <h1
          className="text-3xl font-bold text-gray-900 mb-2"
          data-testid="login-title"
          data-automation-id="txt_login_title"
          aria-label="txt_login_title"
        >
          Welcome Back
        </h1>

        <p
          className="text-gray-600"
          data-testid="login-subtitle"
          data-automation-id="txt_login_subtitle"
          aria-label="txt_login_subtitle"
        >
          Sign in to continue
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
          data-testid="error-message"
          data-automation-id="txt_login_error"
          aria-label="txt_login_error"
          data-error-type="validation"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        data-testid="login-form"
        data-automation-id="form_login"
        aria-label="form_login"
      >

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
            data-testid="email-label"
            data-automation-id="lbl_email"
          >
            Email Address
          </label>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="email-input"
              data-automation-id="input_email"
              aria-label="input_email"
              data-required="true"
              data-validation="email"
              data-maxlength="50"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
            data-testid="password-label"
            data-automation-id="lbl_password"
          >
            Password
          </label>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>

            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-testid="password-input"
              data-automation-id="input_password"
              aria-label="input_password"
              data-required="true"
              data-minlength="8"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
              data-testid="toggle-password-visibility"
              data-automation-id="btn_toggle_password"
              aria-label="btn_toggle_password"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-gray-400" />
              ) : (
                <Eye className="w-5 h-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label
            className="flex items-center gap-2 cursor-pointer"
            data-testid="remember-me-container"
            data-automation-id="chk_remember_me_container"
          >
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              data-testid="remember-me-checkbox"
              data-automation-id="chk_remember_me"
              aria-label="chk_remember_me"
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>

          <button
            type="button"
            className="text-sm text-blue-600 font-medium"
            data-testid="forgot-password-link"
            data-automation-id="lnk_forgot_password"
            aria-label="lnk_forgot_password"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3.5 bg-blue-600 text-white font-medium rounded-lg disabled:opacity-50"
          data-testid="login-button"
          data-automation-id="btn_login"
          aria-label="btn_login"
          data-action="submit_login"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      {/* Social Login */}
      <div
        className="grid grid-cols-3 gap-3 my-8"
        data-testid="social-login-container"
        data-automation-id="container_social_login"
      >
        {['google', 'facebook', 'apple'].map((provider) => (
          <button
            key={provider}
            type="button"
            onClick={() => handleSocialLogin(provider)}
            className="py-3 border border-gray-300 rounded-lg"
            data-automation-id={`btn_login_${provider}`}
            aria-label={`btn_login_${provider}`}
            data-provider={provider}
          >
            {provider.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Sign Up */}
      <div
        className="text-center mt-auto"
        data-testid="signup-container"
        data-automation-id="container_signup"
      >
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            className="text-blue-600 font-medium"
            data-testid="signup-link"
            data-automation-id="lnk_signup"
            aria-label="lnk_signup"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}