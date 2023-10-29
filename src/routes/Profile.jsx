
// We want to display the user's username in the profile route. To do this wee need to consume it from the context store
import { useAuthContext } from "@/context/AuthContext";
import styles from '@/styles/Profile.module.css';

const Profile = () => {
    const { user } = useAuthContext();
    return (
        <div>
            <h1>Profile</h1>
            <div className={styles.Profile} >
                <h2>Hello, {user}</h2>
            </div>
        </div>
    );
};


export default Profile;