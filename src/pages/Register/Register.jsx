import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../routes/FirebaseContext";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const {signUp,googleLogin,logOut,githubLogin, profileUpdate} = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{ 
        signUp(data.email, data.password)
            .then(result => {
                profileUpdate(data.name, data.photoURL)
                .then(()=>{
                    
                })
                logOut();
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
        

    }

    return (
        <div className="lg:max-w-[1440px] mx-auto lg:h-[calc(100vh-426px)] flex lg:p-10  justify-center ">
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
                {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input {...register("image", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
                {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered"  />
                {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
               
                </div>
               
                <div className="form-control mt-6">
                <button className="btn bg-[#1DD100] lg:text-lg text-white">Register</button>
                </div>
                <div className="flex lg:px-10">
                    <p>Already have an account?</p>
                    <Link to="/login" className="text-blue-600 font-bold">Login</Link>
                </div>
                <p className="text-center">Or Register with</p>
             </form>
                <div className="flex gap-4 justify-center lg:pb-8">
                    <button onClick={()=>googleLogin()} className="btn btn-outline w-1/3">Google</button>
                    <button onClick={()=>githubLogin()} className="btn btn-outline w-1/3 btn-primary">Github</button>
                </div>
             
            </div>
       </div>
    );
};

export default Register;