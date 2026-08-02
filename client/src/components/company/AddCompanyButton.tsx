"use client";

import { useRouter } from "next/navigation";


export default function AddCompanyButton() {
    const router = useRouter();

    return (
        <button onClick={() => router.push("/companies/add")}
                className= "rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            + Add Company
        </button>
    )
}