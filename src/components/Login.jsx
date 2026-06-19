import { useState } from "react";
import { User, Lock } from "lucide-react";
import { Button } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../lib/api";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(username, password);
      // Session is now stored — redirect wherever your app should land
      // after a successful login (e.g. a dashboard route).
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-x-hidden px-4 py-6 sm:py-8"
      style={{ backgroundColor: "", minHeight: "calc(100vh - 60px)" }}
    >

      <style>{`
  /* ── Floating label ── */
  .gf { position: relative; margin: 24px 0 18px; }

  .gf input {
    width: 100%;
    height: 52px;
    padding: 0 50px 0 22px;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.22);
    border-radius: 9999px;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.25s;
    box-sizing: border-box;
  }

  .gf input::placeholder { color: transparent; }
  .gf input:focus { border-color: rgba(255,255,255,0.65); }

  .gf label {
    position: absolute;
    left: 22px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    color: rgba(255,255,255,0.45);
    pointer-events: none;
    background: transparent;
    padding: 0 5px;
    line-height: 1;
    white-space: nowrap;
    transition:
      top 0.25s cubic-bezier(.4,0,.2,1),
      transform 0.25s cubic-bezier(.4,0,.2,1),
      font-size 0.25s cubic-bezier(.4,0,.2,1),
      color 0.25s ease,
      background 0.25s ease;
  }

  .gf input:focus ~ label,
  .gf input:not(:placeholder-shown) ~ label {
    top: 0px;
    transform: translateY(-50%);
    font-size: 0.82rem;
    background: #5A532A;
    border-radius: 9999px;
    padding: 2px 6px;
    color: rgba(255,255,255,0.95);
  }

  .gf input:focus ~ label {
    color: #ffffff;
  }

  .gf .gf-icon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255,255,255,0.4);
    pointer-events: none;
    display: flex;
    align-items: center;
  }

  .fancy-cb { display: flex; align-items: center; gap: 10px; cursor: pointer; user-select: none; }
  .fancy-cb input[type=checkbox] { display: none; }

  .cb-track {
    position: relative;
    width: 38px;
    height: 22px;
    border-radius: 11px;
    border: 1.5px solid rgba(255,255,255,0.22);
    background: rgba(255,255,255,0.07);
    transition: background 0.3s ease, border-color 0.3s ease;
    flex-shrink: 0;
  }

  .cb-thumb {
    position: absolute;
    top: 3px; left: 3px;
    width: 14px; height: 14px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    transition: transform 0.28s cubic-bezier(.4,0,.2,1), background 0.28s ease;
  }

  .fancy-cb input:checked ~ .cb-track {
    background: rgba(255,220,140,0.2);
    border-color: rgba(255,220,140,0.8);
  }

  .fancy-cb input:checked ~ .cb-track .cb-thumb {
    transform: translateX(16px);
    background: #ffd88a;
  }

  .fancy-cb .cb-label {
    font-size: 0.8125rem;
    color: rgba(255,255,255,0.65);
  }

  .login-error {
    font-size: 0.8125rem;
    color: #ff9d9d;
    text-align: center;
    margin: -4px 0 14px;
  }
`}</style>

      {/* Wall lamp */}
      <div
        className="relative flex flex-col items-center"
        style={{ marginBottom: -50, zIndex: 10, pointerEvents: "none" }}
      >
        <div style={{ width: 6, height: 14, background: "linear-gradient(to bottom, #33465a, #0e151e)", borderRadius: 1 }} />
        <div style={{ width: 62, height: 26, background: "linear-gradient(to bottom, #38495c, #131b24)", clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)", boxShadow: "0 4px 10px rgba(0,0,0,0.55)" }} />
        <div style={{ width: 44, height: 20, marginTop: -4, borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(255,226,165,0.95) 0%, rgba(255,226,165,0) 75%)", filter: "blur(1.2px)" }} />
        <div style={{
          width: 280, height: 160, marginTop: -2,
          background: [
            "radial-gradient(ellipse 40px 28px at 50% 0px, rgba(255,224,165,0.85) 0%, rgba(255,224,165,0) 70%)",
            "radial-gradient(ellipse 85px 55px at 50% 32px, rgba(255,216,155,0.5) 0%, rgba(255,216,155,0) 72%)",
            "radial-gradient(ellipse 145px 80px at 50% 75px, rgba(255,210,148,0.32) 0%, rgba(255,210,148,0) 72%)",
            "radial-gradient(ellipse 200px 100px at 50% 120px, rgba(255,205,142,0.18) 0%, rgba(255,205,142,0) 74%)",
          ].join(", "),
          filter: "blur(7px)"
        }} />
      </div>

      {/* Glass card */}
      <div
        className="relative w-full rounded-2xl px-6 sm:px-8 py-5 sm:py-6"
        style={{
          maxWidth: 420,
          zIndex: 10,
          background: "rgba(255,255,255,0.05)",
          border: "2px solid rgba(255,255,255,0.22)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          boxShadow: "0 0 10px rgba(0,0,0,0.25)",
        }}
      >
        <h1 className="text-center font-lecturis font-bold text-white text-3xl" style={{ textShadow: "0 0 10px rgba(255,214,145,0.35)" }}>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="gf">
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" " required />
            <label htmlFor="username">Username</label>
            <span className="gf-icon"><User size={18} /></span>
          </div>

          {/* Password */}
          <div className="gf">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" " required />
            <label htmlFor="password">Password</label>
            <span className="gf-icon"><Lock size={18} /></span>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between mt-2 mb-5">
            <label className="fancy-cb">
              <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
              <div className="cb-track"><div className="cb-thumb" /></div>
              <span className="cb-label">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="font-semibold text-white no-underline hover:underline text-[10px] md:text-sm"
            >
              Forgot password?
            </Link>
          </div>

          {error && <p className="login-error">{error}</p>}

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-full bg-white font-semibold text-base cursor-pointer transition-transform duration-150 hover:bg-gray-100 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ color: "#333", boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}