import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom";

interface AuthRouteProps {
    children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                console.log('unauthorized')
                setIsAuthenticated(false);
                navigate('/login');
            }
            setLoading(false);
        });

        return () => unsubscribe();
    },[auth, navigate]);

    if (loading) {
        return <div>Loading...</div>;
    }
    return <div>{children}</div>
}  
export default AuthRoute;