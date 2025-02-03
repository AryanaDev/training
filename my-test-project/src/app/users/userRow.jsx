"use client";

import React from "react";


export default function UserRow({user}) {
    return (
        <tr className="hover:bg-slate-50">
            <td className="p-4 border-b border-slate-200 py-5">
                <p className="block font-semibold text-sm text-slate-800">{user.id}</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
                <p className="text-sm text-slate-500">{user.firstName}</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
                <p className="text-sm text-slate-500">{user.lastName}</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
                <p className="text-sm text-slate-500">{user.email}</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
                <p className="text-sm text-slate-500">{user.birthDate}</p>
            </td>
            <td className="p-4 border-b border-slate-200 py-5">
                <p className="text-sm text-slate-500">{user.createdAt}</p>
            </td>
        </tr>
    );
}
