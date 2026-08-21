import React from 'react'

const LoginLeftSide = () => {
  return (
    <div className='hidden md:flex w-1/2 bg-[#0f172a] relative overflow-hidden border-r border-slate-800'>

      {/* Grid pattern overlay */}
      <div
        className='absolute inset-0 opacity-[0.07]'
        style={{
          backgroundImage:
            'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Blur orb - top left */}
      <div className='absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/25 rounded-full blur-3xl' />

      {/* Blur orb - bottom right */}
      <div className='absolute -bottom-40 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl' />

      {/* Subtle vignette for depth */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a]' />

      <div className='relative z-10 flex flex-col items-start justify-center p-12 lg:p-20 w-full h-full animate-[fadeIn_0.6s_ease-out]'>

        {/* Eyebrow badge */}
        <div className='flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/20'>
          <span className='w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse' />
          <span className='text-indigo-300 text-xs font-medium tracking-wide'>ENTERPRISE HR SUITE</span>
        </div>

        <h1 className='text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight'>
          Employee <br />
          <span className='bg-gradient-to-r from-indigo-300 to-white bg-clip-text text-transparent'>
            Management System
          </span>
        </h1>

        <p className='text-slate-400 text-lg max-w-md leading-relaxed mb-10'>
          A centralized platform to manage employees, track attendance, handle leave requests,
          and streamline everyday workplace operations—all in one place.
        </p>

        {/* Feature pills */}
        <div className='flex flex-wrap gap-3'>
          {['Attendance', 'Leave Tracking', 'Payroll'].map((item) => (
            <div
              key={item}
              className='px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm backdrop-blur-sm'
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoginLeftSide