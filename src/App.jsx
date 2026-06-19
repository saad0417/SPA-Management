import React from 'react'
import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SideRays, Navbar } from "./components/index";



function App() {

  const location = useLocation();

  return (
    <>
    {/* <div className="flex min-h-screen flex-col bg-surface-50 text-ink-900"> */}
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0 }}>
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
          className="z-[1000] min-h-screen"
        />
      </div>
          {/* Bars loader — for API/data fetching via Redux dispatch */}
          {/* <Loader 
          loading={loading} 
          variant="bars" 
          fullPage 
          /> */}
    
          <ScrollRestoration />
          <Navbar />
    
          <main className="flex-1 animate-page-in bg-[#F0F0F0]">
            {console.log("Current location:", location.pathname)}
    
            {/* Suspense — for React.lazy() page bundle downloading */}
            <Suspense fallback={
              <div className="flex min-h-[60vh] items-center justify-center">
                {/* <Loader loading={true} variant="bars" />  same bars, consistent UI */}
              </div>
            }>
              <Outlet />
            </Suspense>
    
          </main>
    
          {/* <Footer /> */}
        {/* </div> */}
        </>
  )
}

export default App
