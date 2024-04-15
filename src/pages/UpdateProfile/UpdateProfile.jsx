import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { AuthContext } from "../../routes/FirebaseContext";

const UpdateProfile = () => {

    const {user,profileUpdate } = useContext(AuthContext)
   

   

   const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const photo = form.get("photo")
        profileUpdate(name, photo)
        .then(()=>{})
        .catch(error => {
            console.log(error)
        })
        console.log(name, photo)
   }
    return (
        <div className="lg:max-w-[1440px] mx-auto lg:h-[calc(100vh-426px)]">
            <Helmet>
                <title>Opulent Estates | Update Profile</title>
            </Helmet>
          <div className="card shrink-0 w-full  lg:w-2/4 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                    
                    <input type="text" placeholder="Your name" name="name" defaultValue={user?.displayName} className="input input-bordered"  />
                
                    </div>
                    <div className="form-control">
                   
                    <input type="text" placeholder="Photo URL" name="photo" defaultValue={user?.photoURL} className="input input-bordered" />
                
                    </div>
                    <div className="form-control">
                   
                    <input  type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered"  />
                
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#1DD100] lg:text-lg text-white">Update Profile</button>
                    </div>
            </form>
          </div>
        </div>
    );
};

export default UpdateProfile;