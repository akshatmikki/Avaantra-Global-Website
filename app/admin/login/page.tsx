"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const ADMIN_AUTH_KEY = "avaantra_admin_auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem(ADMIN_AUTH_KEY) === "true") {
      router.replace("/admin/blogs");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const expectedUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME || "admin";
    const expectedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

    if (username.trim() !== expectedUser || password !== expectedPassword) {
      setError("Invalid username or password.");
      return;
    }

    localStorage.setItem(ADMIN_AUTH_KEY, "true");
    router.replace("/admin/blogs");
  };

  return (
    <main className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="mx-auto max-w-md px-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage Avaantra blogs.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Username</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary-500"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary-500"
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</p>
            )}

            <Button type="submit" className="w-full bg-primary hover:bg-[#E76A32]">
              Login
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
