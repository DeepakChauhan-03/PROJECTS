import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'
import { ArrowRightIcon, ShieldIcon, UserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description: "Manage employees, department, payroll, and system configurations.",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description: "View your profile, track attendance, request time off, and access payslips.",
      icon: UserIcon,
    }
  ]

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />

      <div className='w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen bg-white'>

        {/* subtle dot pattern for cohesion with left side */}
        <div
          className='absolute inset-0 opacity-[0.4] pointer-events-none'
          style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className='w-full max-w-md animate-fade-in relative z-10'>

          {/* Header */}
          <div className='mb-10 text-center md:text-left'>
            <div className='inline-flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-600 mb-6'>
              <ShieldIcon className='w-5 h-5 text-white' />
            </div>
            <h2 className='text-3xl font-medium text-slate-900 tracking-tight mb-2'>
              Welcome Back
            </h2>
            <p className='text-slate-500'>
              Select your portal to securely access the system.
            </p>
          </div>

          {/* portal */}
          <div className='space-y-4'>
            {portalOptions.map((portal) => {
              const Icon = portal.icon
              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className='group relative block bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-100'
                >
                  {/* top accent bar */}
                  <div className='absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300' />

                  <div className='relative z-10 flex items-start gap-4 sm:gap-5'>
                    <div className='shrink-0 w-11 h-11 rounded-lg bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300'>
                      <Icon className='w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300' />
                    </div>

                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center justify-between gap-3'>
                        <h3 className='text-lg font-medium text-slate-800 group-hover:text-indigo-600 transition-colors'>
                          {portal.title}
                        </h3>
                        <ArrowRightIcon className='w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300 shrink-0' />
                      </div>
                      <p className='text-sm text-slate-500 mt-1 leading-relaxed'>
                        {portal.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* footer */}
          <div className='mt-12 text-center md:text-left text-sm text-slate-400'>
            <p>© {new Date().getFullYear()} WorkDesk. All rights reserved.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginLanding