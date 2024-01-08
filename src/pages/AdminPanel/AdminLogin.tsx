import React from "react";
import EnterEmail from "../../components/shared/EnterEmail";
import EnterPass from "../../components/shared/EnterPass";
import DefaultBtn from "../../components/shared/DefaultBtn";


import './AdminLogin.scss'


const AdminLogin = () => {

    return (
        <>
            <div className="adminLogin">
                <div className="adminLoginWrapper">
                    <h1 className="adminLoginTitle">Log in to<br /> Admin dashboard</h1>
                    <div className="adminLoginForm">
                        <form>
                            <EnterEmail />
                            <EnterPass />

                            <DefaultBtn textBtn="Log in" methodBtn={'AdminLogin'}></DefaultBtn>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin