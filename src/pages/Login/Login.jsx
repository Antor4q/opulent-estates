import { useContext, useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/FirebaseContext";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { LuEye, LuEyeOff } from "react-icons/lu";


const Login = () => {

    const { signIn,googleLogin,githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{ 
        signIn(data.email, data.password)
        .then(result => {
            reset()
            console.log(result.user)
            toast.success("Login Success")
           setTimeout(()=>{

            navigate(location?.state ? location.state : "/")
           },500)
        })
        .catch(error => {
            console.log(error.message)
            toast.error("Invalid email and password")
        })
    }

    



    
    return (
       <div className="lg:h-[calc(100vh-426px)]">
            <div className="lg:max-w-[1440px] mx-auto flex   justify-center lg:my-20">

            <Helmet>
                <title>Opulent Estates | Login</title>
            </Helmet>
                <div className="card shrink-0 w-full  lg:w-1/3 shadow-2xl bg-base-100">
                
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                <input {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[a-z]).*$/,minLength: 6 })}
                 type={showPassword ? "text": "password"} 
                 placeholder="password" 
                 className="input w-full  input-bordered "  />
                <span className="text-xl absolute right-3 top-4" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>
                </div>

                    </div>
                
                    <div className="form-control mt-6">
                    <button className="btn bg-[#1DD100] lg:text-lg text-white">Login</button>
                    <Toaster />
                    </div>
                    <div className="flex lg:px-10">
                        <p>New Here?</p>
                        <Link to="/register" className="text-blue-600 font-bold">Register</Link>
                    </div>
                    <p className="text-center border-b lg:pb-4">Continue With</p>
                </form>
                    <div className="flex gap-4 justify-center items-center pb-6 lg:pb-8 ">
                        <button onClick={()=>googleLogin()} className="btn btn-outline hover:bg-[#1DD100] w-1/3"><FaGoogle /> Google</button><p>OR</p>
                        <button onClick={()=>githubLogin()} className="btn btn-outline hover:bg-[#1DD100] w-1/3 "><FaGithub /> Github</button>
                    </div>
                  
                                    
                </div>
            </div>
       </div>
    );
};

export default Login;