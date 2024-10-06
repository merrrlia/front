// src/components/Dashboard.js

import React from "react";
import UserList from "./UserList";
import RoleList from "./RoleList";

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            <div className="w-2/3 p-5  border-gray-300">
                <UserList />
            </div>
            <div className="w-1/3 p-5">
                <RoleList />
            </div>
        </div>
    );
};

export default Dashboard;
