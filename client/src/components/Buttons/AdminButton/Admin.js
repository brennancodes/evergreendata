import React from "react";
import {Link} from "react-router-dom";

function AdminButton() {

    return (
        <div>
            <Link to="/admin"
                className={
                    window.location.pathname === "/admin"
            }>
                <button type="button"
                    style={
                        {
                            width: "100px",
                            height: "50px",
                            fontSize: "24px",
                            backgroundColor: "white",
                            color: "#194d30",
                            borderRadius: "6px",
                            border: ".5px solid white",
                            padding: 5
                        }
                }>
                    Admin
                </button>
            </Link>
        </div>
    )
}

export default AdminButton;
