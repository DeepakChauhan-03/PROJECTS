import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon, Loader2Icon } from 'lucide-react'

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    setLoading(true)

    try {
      // TODO: replace with actual auth call using `role`, email, password
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />

      <div className='flex-1 flex items-center justify-center p-6 sm:p-12 bg-white'>
        <div className='w-full max-w-md animate-fade-in'>

          <Link
            to={'/login'}
            className='inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors'
          >
            <ArrowLeftIcon size={16} /> Back to portals
          </Link>

          <div className='mb-8'>
            <h1 className='text-2xl sm:text-3xl font-medium text-zinc-800'>{title}</h1>
            <p className='text-slate-500 text-sm sm:text-base mt-2'>{subtitle}</p>
          </div>

          {error && (
            <div className='mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3'>
              <div className='w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0' />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form className='space-y-5' onSubmit={handleSubmit}>

            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1.5'>
                E-mail Address
              </label>
              <div className='relative'>
                <MailIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400' size={18} />
                <input
                  type="email"
                  value={email}
                  placeholder='Enter your e-mail'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-slate-700 mb-1.5'>
                Password
              </label>
              <div className='relative'>
                <LockIcon className='absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400' size={18} />
                <input
                  type='password'
                  value={password}
                  placeholder='Enter your password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className='w-full pl-11 pr-11 py-3 rounded-lg border border-slate-200 text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50'
                />
                {/* <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button> */}
              </div>
            </div>

            <div className='flex justify-end'>
              <Link to='/forgot-password' className='text-sm text-indigo-600 hover:text-indigo-700 transition-colors'>
                Forgot password?
              </Link>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium py-3 rounded-lg transition-all hover:bg-indigo-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed'
            >
              {loading ? (
                <>
                  <Loader2Icon size={18} className='animate-spin' />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm