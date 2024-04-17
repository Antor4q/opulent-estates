import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { AuthContext } from "../../routes/FirebaseContext";

const UpdateProfile = () => {

    const {user,setUser,profileUpdate } = useContext(AuthContext)
   

   

   const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const photo = form.get("photo")
        
        profileUpdate(name, photo)
        .then(()=>{
            setUser({...user,displayName: name,photoURL: photo})
            
        })
        .catch(error => {
            console.log(error)
        })
        console.log(name, photo)
   }
    return (
        <div className="lg:max-w-[1440px] mx-auto flex items-center justify-center  lg:h-[calc(100vh-426px)]" >
            <Helmet>
                <title>Opulent Estates | Update Profile</title>
            </Helmet>
          <div  className="card shrink-0 w-full  lg:w-2/4 shadow-2xl bg-base-100" >
                    
            <form onSubmit={handleSubmit} className="card-body">
                    <div className=" h-[200px] flex  w-full p-4  justify-center items-center">
                        <img className="mx-auto w-[200px] rounded-full" src={user?.photoURL} alt="" />
                    </div>
                   
                    <div className="form-control border-b">
                    
                    
                    <input type="text" placeholder="Your name" name="name" defaultValue={user?.displayName} className="input border-none  input-bordered " />
                
                    </div>
                    <div className="form-control border-b">
                   
                    <input type="text" placeholder="Photo URL" name="photo" defaultValue={user?.photoURL} className="input input-bordered border-none" />
                
                    </div>
                    <div className="form-control border-b">
                   
                    <input  type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered border-none"  />
                
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