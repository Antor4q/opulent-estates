import { useContext } from "react";
import { AuthContext } from "./FirebaseContext";
import { Navigate,useLocation } from "react-router-dom"


const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <>
            <div className="lg:h-[calc(100vh-426px)] lg:max-w-[1440px] mx-auto flex justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }

    if(user){
        return children
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;