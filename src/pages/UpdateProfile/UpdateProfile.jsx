import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    return (
        <div className="lg:h-[calc(100vh-426px)]">
            <Helmet>
                <title>Opulent Estates | Update Profile</title>
            </Helmet>
            <h2 className="text-3xl text-center">You can update your profile</h2>
        </div>
    );
};

export default UpdateProfile;