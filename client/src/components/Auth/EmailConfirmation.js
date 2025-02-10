import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const EmailConfirmation = () => {
    const { token } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`https://chesschamp-backend.onrender.com/u/confirmation/${token}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert("Invalid or expired token");
                } else {
                    alert("Email confirmed successfully!");
                    history.push("/login");
                }
            })
            .catch((err) => console.error("Error:", err));
    }, [token, history]);

    return <h2>Confirming your email...</h2>;
};

export default EmailConfirmation;
