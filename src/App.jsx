import React, { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { SideRays, Navbar, Footer } from "./components/index"

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
      <div className="fixed inset-0 ">
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

      {/* App Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <ScrollRestoration />

        <div className="relative z-50">
        <Navbar />
        </div>

        <main className="flex-1 animate-page-in">
          {console.log("Current location:", location.pathname)}

          <Suspense
            fallback={
              <div className="flex min-h-[60vh] items-center justify-center">
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;