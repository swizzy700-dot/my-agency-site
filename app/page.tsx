"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main style={{ fontFamily: "Arial", background: "#f9fafb", color: "#111" }}>

      {/* NAVBAR */}
      <header>
        

         <nav>
          
    
   </nav>
      </header>

      {/* HERO */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <img
  src="/logo.png"
  alt="My Logo"
  style={{
    width: "780px",
    maxWidth: "90%",
    height: "auto",
    margin: "0 auto",
    display: "block"
  }}
/>

        <p style={{ marginTop: "20px", fontSize: "13px", color: "#080707d0" }}>
          MLR is positioned as a premium digital partner for businesses that seek more than just a website but a powerful, results-driven online presence.

We work with ambitious brands, growing enterprises, and forward-thinking business owners who understand that investing in quality digital infrastructure is essential for long-term success.

MLR is not designed for mass, low-cost production. Instead, we are dedicated to providing high-value, professionally executed digital solutions for clients who prioritise quality, reliability, and impact.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "60px 20px" }}>

        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
          Our Services
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "40px auto"
        }}>

          {/* CARD 1 */}
          <div
            onClick={() => setActive(active === 1 ? null : 1)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Professional Website Design & Development</h3>

            {active === 1 && (
              <ul>
                <li>Business / Coporate Websites</li>
                <li>E-commerce Stores</li>
                <li>Landing Pages</li>
                <li>Brochure Websites</li>
                <li>Portfolio Websites</li>
                <li>Blog / Content Websites</li>
              </ul>
            )}
          </div>

 
        
    
          {/* CARD 2 */}
          <div
            onClick={() => setActive(active === 2 ? null : 2)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Website Setup & Launch</h3>

            {active === 2 && (
              <ul>
                <li>Domain setup</li>
                <li>Hosting setup</li>
                <li>Full website deployment</li>
                
              </ul>
            )}
          </div>



 {/* CARD 3 */}
          <div
            onClick={() => setActive(active === 3 ? null : 3)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Website Maintenance & Support</h3>

            {active === 3 && (
              <ul>
                <li>Regular updates</li>
                <li>Technical support</li>
                <li>Backups</li>
                <li>Minor changes</li>
                
              </ul>
            )}
          </div>



{/* CARD 4 */}
          <div
            onClick={() => setActive(active === 4 ? null : 4)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Website Performance Optimisation</h3>

            {active === 4 && (
              <ul>
                <li>Speed improvements</li>
                <li>Image optimisation</li>
                <li>Performance tuning</li>
                
              </ul>
            )}
          </div>


{/* CARD 5 */}
          <div
            onClick={() => setActive(active === 5 ? null : 5)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Website Security</h3>

            {active === 5 && (
              <ul>
                <li>SSL setup</li>
                <li>Security plugins</li>
                <li>Basic protection</li>
                
              </ul>
            )}
          </div>


{/* CARD 6 */}
          <div
            onClick={() => setActive(active === 6 ? null : 6)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Integrations & Add-Ons</h3>

            {active === 6 && (
              <ul>
                <li>Payment integrations</li>
                <li>Booking systems</li>
                <li>Chat systems</li>
                <li>Email marketing integration</li>
                <li>Speed plugins</li>
                
              </ul>
            )}
          </div>


          {/* CARD 7 */}
          <div
            onClick={() => setActive(active === 7 ? null : 7)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>SEO Optimisation</h3>

            {active === 7 && (
              <ul>
                <li>Google Ranking</li>
                <li>Speed Optimization</li>
                <li>Meta Tags</li>
              </ul>
            )}
          </div>

{/* CARD 8 */}
          <div
            onClick={() => setActive(active === 8 ? null : 8)}
            style={{
              border: "1px solid #000",
              padding: "20px",
              borderRadius: "10px",
              background: "white",
              cursor: "pointer"
            }}
          >
            <h3>Branding & Website Package</h3>

            {active === 8 && (
              <ul>
                <li>Logo design</li>
                <li>Brand styling</li>
                <li>Full website design</li>
              </ul>
            )}
          </div>

        </div>
      </section>

      {/* PORTFOLIO */}
<section id="work" style={{ padding: "40px 10px", textAlign: "center" }}>
  <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>
  Why Choose MLR
</h2>

<div style={{ maxWidth: "800px", margin: "30px auto", textAlign: "left", lineHeight: "1.8" }}>

  <p>• <strong>Refined, High-End Design:</strong> Visually striking websites that communicate professionalism and credibility.</p>

  <p>• <strong>Strategic, Business-Focused Approach:</strong> Designed to attract, engage, and convert.</p>

  <p>• <strong>Performance & Functionality Excellence:</strong> Fast, responsive, secure, and optimised.</p>

  <p>• <strong>Tailored, Client-Centric Solutions:</strong> Custom-built for your brand and goals.</p>

  <p>• <strong>End-to-End Professional Service:</strong> From concept to launch and beyond.</p>

  <p>• <strong>Built for Growth:</strong> Scalable solutions for long-term success.</p>

</div>

  <h2 style={{ marginTop: "40px" }}>Let’s Work Together</h2>

  <div style={{ maxWidth: "800px", margin: "20px auto", textAlign: "left", lineHeight: "1.6" }}>
    <p>
      If you are ready to elevate your brand and establish a strong, professional online presence, MLR is ready to partner with you.
    </p>

    <p>
      We invite you to connect with us to discuss how we can bring your vision to life through a tailored, high-quality website solution.
    </p>
  </div>
</section>
    
        
 {/* CONTACT */}
<section id="contact" style={{ padding: "60px 20px", textAlign: "center" }}>

  <h2>Contact Us</h2>

  {/* ANIMATED BOX */}
  <div
    style={{
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px",
      border: "2px solid #000",
      borderRadius: "12px",
      background: "#ffffff1e",
      transition: "all 0.3s ease",
      cursor: "pointer",
      animation: "floatBox 3s ease-in-out infinite"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >

    {/* WhatsApp */}
    <p style={{ margin: "10px 0", fontSize: "15px" }}>
      📱 WhatsApp:{" "}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        style={{ color: "#000", fontWeight: "500", textDecoration: "none" }}
      >
        Chat Now
      </a>
    </p>

    {/* Email */}
    <p style={{ margin: "10px 0", fontSize: "15px" }}>
      ✉️ Email:{" "}
      <a
        href="mailto:yourbusiness@email.com"
        style={{ color: "#000", fontWeight: "500", textDecoration: "none" }}
      >
        Send Email
      </a>
    </p>

  </div>

  {/* ANIMATION STYLE */}
  <style jsx>{`
    @keyframes floatBox {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
  `}</style>

</section>


</main>
);
}