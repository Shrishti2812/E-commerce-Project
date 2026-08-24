import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";
function Login() {
 
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  
   const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res=await api.post("/user/login",{email,password});
      console.log(res.data)
       localStorage.setItem("token", res.data.token);
    }catch(err){
      console.error(err);
    }
    }
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-8">
      <section className="w-full max-w-sm rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
        <header className="mb-2   text-center">
      
          <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to continue shopping.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required value={email} onChange={(e)=>setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <Link to="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
                  Forgot password?
                </Link>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required value={password} onChange={(e)=>setPassword(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100"
            >
              Sign in
            </button>
        </form>

        <div className="mt-6 border-t border-slate-100 pt-5 text-center">
          <p className="text-sm text-slate-500">
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-700">
                Register
              </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;
