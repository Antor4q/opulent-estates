import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/FirebaseContext";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Register = () => {

    const {signUp,googleLogin,logOut,githubLogin, profileUpdate} = useContext(AuthContext)
   const {charError,setCharError} = useState("")
   const {showPassword,setShowPassword} = useState(false)
   console.log(showPassword)
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{ 
       
      
       
      
        signUp(data.email, data.password)
            .then(result => {
               
                reset()
                profileUpdate(data.name, data.photoURL)
                .then(()=>{
                   
                })
               
                logOut();
               toast.success("Registration Success")
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message.slice(10,50))
                setCharError(error.message.slice(10,50))
            })
       console.log(charError)

    }

    return (
       <div className=" lg:h-[calc(100vh-426px)]">
                 <div className="lg:max-w-[1440px] mx-auto flex lg:p-10  justify-center ">
            <Helmet>
                <title>Opulent Estates | Register</title>
            </Helmet>
            <div className="card shrink-0 w-full  lg:w-2/4 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered"  />
                {errors.name && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input {...register("image", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                {errors.image && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
                {errors.email && <span className="text-red-500">This field is required</span>}
                </div>

                <div className="form-control ">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true, pattern: /^(?=.*[A-Z])(?=.*[a-z]).*$/,minLength: 6 })} type={showPassword ? "text": "password"} placeholder="password" className="input  input-bordered "  />
                <span className="text-3xl" onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <LuEyeOff />:<LuEye />}</span>
                {errors.password && errors.password.type === "required" && (<span className="text-red-500">This field is required</span>)}
                {errors.password && errors.password.type === "pattern" && (<span className="text-red-500">Password must have an Uppercase and Lowercase</span>)}
                {errors.password && errors.password.type === "minLength" && (<span className="text-red-500">Password should be at least 6 characters</span>)}
               
                </div>
               
                <div className="form-control mt-6">
                <button className="btn bg-[#1DD100] lg:text-lg text-white">Register</button>
                <Toaster />
                </div>
                <div className="flex lg:px-10">
                    <p>Already have an account?</p>
                    <Link to="/login" className="text-blue-600 font-bold">Login</Link>
                </div>
                <p className="text-center border-b lg:pb-8">Or Register with</p>
             </form>
                <div className="flex gap-4 justify-center lg:pb-8">
                    <button onClick={()=>googleLogin()} className="btn btn-outline hover:bg-[#1DD100] w-1/3"><FaGoogle /> Google</button>
                    <button onClick={()=>githubLogin()} className="btn btn-outline hover:bg-[#1DD100] w-1/3 "><FaGithub /> Github</button>
                </div>
             
            </div>
       </div>
       </div>
    );
};

export default Register;