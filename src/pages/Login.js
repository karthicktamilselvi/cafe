import React ,{useState} from 'react'

const Login = () => {
  const [formValues,setFormValues] = useState({
    username:'',
    password:''
  })

  const handleChange = (e) => {
      const {name,value} = e.target;
      setFormValues(prev => ({ ...prev, [name] : value}))
  }

  const  handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", formValues)
  }

  return (
      <>
       <div className="flex items-center justify-center min-h-screen  px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-sm loginFormBanner rounded-md p-5 space-y-8">
            <div>
              <h2 className="mt-6 text-center text-2xl font-bold underline tracking-tight login-text">
                Heritage Cafe
              </h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
              <div>
                <label htmlFor="username" name="username" className="block text-sm font-medium login-text">
                  Username
                </label>
                <input type="text" name="username" id="username" value={formValues.username} onChange={handleChange}  className="mt-1 block w-full px-3 py-1.5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium login-text">
                  Password
                </label>
                <input type="password" name="password" id="password" value={formValues.password} onChange={handleChange} className="mt-1 block w-full px-3 py-1.5 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center rounded-md login-btn py-2 px-4 text-sm font-semibold text-red-900">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}

export default Login;


