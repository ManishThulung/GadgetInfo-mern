import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { useNavigate, Link } from "react-router-dom";
import MetaData from "../layout/Metadata";
import "./Account.css";

function Account() {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src="/profile.png" alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.joinedAt).substring(0, 10)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Account;
