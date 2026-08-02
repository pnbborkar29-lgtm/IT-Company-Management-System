"use client";

import Link from "next/link";
import { FaBuilding, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-800 text-white">
      <div className="p-5 border-b border-slate-700">
        <h1 className="text-2xl font-bold">Company Hub</h1>
      </div>

      <nav className="p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-slate-700"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          href="/companies"
          className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-slate-700"
        >
          <FaBuilding />
          Companies
        </Link>
      </nav>
    </aside>
  );
}