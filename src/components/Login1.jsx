import { useState } from "react";
import { User, Lock } from "lucide-react";
import SideRays from "./background/SideRays";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, remember });
  };

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden px-4 py-10 sm:py-16"
      style={{ backgroundColor: "#000000", minHeight: "100vh" }}
    >

      {/* SideRays — absolute, fills the whole screen, behind everything */}
      <div className="absolute inset-0 z-0">
        <SideRays
          speed={2.1}
          rayColor1="#ffc000"
          rayColor2="#ffffff"
          intensity={1.7}
          spread={1.5}
          origin="top-right"
          tilt={-9}
          saturation={1.5}
          blend={0.67}
          falloff={1.6}
          opacity={1}
        />
      </div>

      <style>{`
        /* ── Floating label ── */
        .gf { position: relative; margin: 28px 0 22px; }

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
            background 0s 0.25s;
        }

        /* Floated: on focus or when field has value */
        .gf input:focus ~ label,
        .gf input:not(:placeholder-shown) ~ label {
          top: 0px;
          transform: translateY(-50%);
          font-size: 0.82rem;
          background: #172b4a;
          padding: 0 6px;
          color: rgba(255,255,255,0.85);
          transition:
            top 0.25s cubic-bezier(.4,0,.2,1),
            transform 0.25s cubic-bezier(.4,0,.2,1),
            font-size 0.25s cubic-bezier(.4,0,.2,1),
            color 0.25s ease,
            background 0s;
        }

        .gf input:focus ~ label {
          color: rgba(255,224,150,1);
          background: #172b4a;
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

        /* ── Toggle switch ── */
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
        .fancy-cb .cb-label { font-size: 0.8125rem; color: rgba(255,255,255,0.65); }
      `}</style>

      {/* Wall lamp — z-10 sits above SideRays */}
      <div
        className="relative flex flex-col items-center"
        style={{ marginBottom: -80, zIndex: 10, pointerEvents: "none" }}
      >
        <div style={{ width: 8, height: 20, background: "linear-gradient(to bottom, #33465a, #0e151e)", borderRadius: 1 }} />
        <div style={{ width: 84, height: 36, background: "linear-gradient(to bottom, #38495c, #131b24)", clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)", boxShadow: "0 6px 14px rgba(0,0,0,0.55)" }} />
        <div style={{ width: 60, height: 28, marginTop: -6, borderRadius: "50%", background: "radial-gradient(ellipse at center, rgba(255,226,165,0.95) 0%, rgba(255,226,165,0) 75%)", filter: "blur(1.5px)" }} />
        <div style={{
          width: 360, height: 250, marginTop: -4,
          background: [
            "radial-gradient(ellipse 50px 35px at 50% 0px, rgba(255,224,165,0.85) 0%, rgba(255,224,165,0) 70%)",
            "radial-gradient(ellipse 110px 70px at 50% 45px, rgba(255,216,155,0.5) 0%, rgba(255,216,155,0) 72%)",
            "radial-gradient(ellipse 190px 105px at 50% 100px, rgba(255,210,148,0.32) 0%, rgba(255,210,148,0) 72%)",
            "radial-gradient(ellipse 270px 135px at 50% 165px, rgba(255,205,142,0.18) 0%, rgba(255,205,142,0) 74%)",
            "radial-gradient(ellipse 340px 155px at 50% 225px, rgba(255,200,138,0.09) 0%, rgba(255,200,138,0) 76%)",
          ].join(", "),
          filter: "blur(8px)"
        }} />
      </div>

      {/* Glass card — z-10 sits above SideRays */}
      <div
        className="relative w-full rounded-2xl px-6 sm:px-8 py-6"
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
        <h1 className="text-center font-bold text-white text-3xl" style={{ textShadow: "0 0 10px rgba(255,214,145,0.35)" }}>
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
            <a
              href="#" onClick={(e) => e.preventDefault()}
              style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-11 rounded-full bg-white font-semibold text-base cursor-pointer transition-transform duration-150 hover:bg-gray-100 active:scale-95"
            style={{ color: "#333", boxShadow: "0 0 10px rgba(0,0,0,0.15)" }}
          >
            Login
          </button>

          <p className="text-center text-sm text-white mt-5">
            Don't have an account?{" "}
            <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-white no-underline hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}