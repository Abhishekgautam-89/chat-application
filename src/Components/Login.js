import React, {useState} from 'react'

const Login = ({onToggle}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log(name, password)
        setName('');
        setPassword('')
    }
    const toRegister = (e)=>{
        e.preventDefault();
        onToggle('register')
    }
  return (
    <>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value = {name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value = {password}
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <button onClick={toRegister} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Click here to register
            </button>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login

// socket am5 ryzen 7, mobo, ram-16gb
//62927 
// psu 3500
// cabinet 3500
// gpu 13390
// monitor msi curved screen 32500
// keyboard mouse - 2500
//  sony speaker 5.1 - 17944
// total 136244

//22095.88
//46200
// 380
// 100
// 1103
// 395
// 332
// 167

// 2832
// 1989
// 14224
// 3997
// 3120

