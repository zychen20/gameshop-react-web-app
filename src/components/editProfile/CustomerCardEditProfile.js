import React, { useContext } from 'react'
import { UserContext } from '../../context/user'
import { Link } from 'react-router-dom'
import './edit.css'

const CustomerCardEditProfile = () => {
    const {user} = useContext(UserContext);
    return (
        <>
            <div className="user-card user-card-flex">
                <div className="m-5">
                    <div>
                        <img src={user.image_url} alt=""/>
                    </div>
                    <h3>
                        <span>{user.firstname} </span>
                        <span>{user.lastname}</span>
                    </h3>
                    <p className="text-grey">{user.bio}</p>

                    <Link
                        className="btn btn-secondary"
                        to="/profile">
                        Back
                    </Link>
                </div>
            </div>
        </>
    )
}
export default CustomerCardEditProfile