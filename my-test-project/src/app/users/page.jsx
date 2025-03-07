"use client";
import React from "react";
import { users } from "@/components/data/usersData";
import Menu from "@/components/menu/menu";
import UserRow from "@/app/users/userRow";

export default function Users() {
    return (
        <div className="flex flex-row">
            <div className="w-1/4">
                <Menu />
            </div>

            <div className="w-3/4 relative flex flex-col text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                    <tr>
                        <th className="p-4 border-b border-slate-300 bg-slate-50">
                            <p className="block text-sm font-normal leading-none text-slate-500">Id</p>
                        </th>
                        <th className="p-4 border-b border-slate-300 bg-slate-50">
                            <p className="block text-sm font-normal leading-none text-slate-500">Name</p>
                        </th>
                        <th className="p-4 border-b border-slate-300 bg-slate-50">
                            <p className="block text-sm font-normal leading-none text-slate-500">Last Name</p>
                        </th>
                        <th className="p-4 border-b border-slate-300 bg-slate-50">
                            <p className="block text-sm font-normal leading-none text-slate-500">Email</p>
                        </th>
                        <th className="p-4 border-b border-slate-300 bg-slate-50">
                            <p className="block text-sm font-normal leading-none text-slate-500">Birthday</p>
                        </th>
                        <th className="p-4 border-b border-slate-300 bg-slate-50">
                            <p className="block text-sm font-normal leading-none text-slate-500">Created_at</p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <UserRow  key={index} user={user}/>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
