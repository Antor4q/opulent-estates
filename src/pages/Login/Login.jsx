import { useContext } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../../routes/FirebaseContext";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Login = () => {

    const { signIn,googleLogin,githubLogin } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{ 
        signIn(data.email, data.password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.log(error)
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
                    <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered"/>
                    {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                    </div>
                
                    <div className="form-control mt-6">
                    <button className="btn bg-[#1DD100] lg:text-lg text-white">Login</button>
                    </div>
                    <div className="flex lg:px-10">
                        <p>New Here?</p>
                        <Link to="/register" className="text-blue-600 font-bold">Register</Link>
                    </div>
                    <p className="text-center border-b lg:pb-4">Or Login in with</p>
                </form>
                    <div className="flex gap-4 justify-center lg:pb-8 ">
                        <button onClick={()=>googleLogin()} className="btn btn-outline hover:bg-[#1DD100] w-1/3"><FaGoogle /> Google</button>
                        <button onClick={()=>githubLogin()} className="btn btn-outline hover:bg-[#1DD100] w-1/3 "><FaGithub /> Github</button>
                    </div>
                
                </div>
            </div>
       </div>
    );
};

export default Login;