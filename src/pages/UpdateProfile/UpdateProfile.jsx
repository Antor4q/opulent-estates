import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../routes/FirebaseContext";

const UpdateProfile = () => {

    const {user,setUser} = useContext(AuthContext)
    const {name,setName} = useState("")
    const {photoURL,setPhotoURL} = useState("")

    const {register,handleSubmit } = useForm()

    const onSubmit = (data) => {
           setName(data.name || "oops")
           setPhotoURL(data.image || "oop")
    }
    console.log(name, photoURL)
    return (
        <div className="lg:max-w-[1440px] mx-auto lg:h-[calc(100vh-426px)]">
            <Helmet>
                <title>Opulent Estates | Update Profile</title>
            </Helmet>
          <div className="card shrink-0 w-full  lg:w-2/4 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                    
                    <input {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered"  />
                
                    </div>
                    <div className="form-control">
                   
                    <input {...register("image", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                
                    </div>
                    <div className="form-control">
                   
                    <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
                
                    </div>
                   <input type="submit" value="Update Profile" />
            </form>
          </div>
        </div>
    );
};

export default UpdateProfile;