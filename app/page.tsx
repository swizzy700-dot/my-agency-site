"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState<number | null>(null);
const [showFAQ, setShowFAQ] = useState(false);
  return (
    <main style={{
  fontFamily: "Arial",
  background: "linear-gradient(180deg, #f9fafb05 0%, #f5eeee2d 100%)",
  color: "#111",
  minHeight: "100vh"
}}>


<style>
{`
@keyframes scrollText {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
`}
</style>



{/* TOP BAR TEST */}
<div
  style={{
    background: "black",
    color: "white",
    whiteSpace: "nowrap",
    overflow: "hidden",
    padding: "10px",
  }}
>
  <div
    style={{
      display: "inline-block",
      animation: "moveText 20s linear infinite",
    }}
  >
    •Turn Visitors Into Clients • Elevate Your Brand Online • Websites That Deliver Real Business Results ••Custom Website Packages Available • Tailored Solutions for Every Business • Start Your Project Today•
  </div>

  <style>
    {`
      @keyframes moveText {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
    `}
  </style>
</div>





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
    width: "1000px",
    maxWidth: "100%",
    height: "auto",
    margin: "0 auto",
    display: "block"
  }}
/>
{/* HERO 3 IMAGES */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap"
  }}
>
  <img
    src="/img1.jpg"
    alt="image 1"
    style={{
      width: "270px",
      height: "250px",
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transform: "translateY(-120px)",
      transition: "0.3s ease"
    }}
  />

  <img
    src="/img2.jpg"
    alt="image 2"
    style={{
      width: "270px",
      height: "250px",
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transform: "translateY(-120px)",
      transition: "0.3s ease"
    }}
  />

  <img
    src="/img3.jpg"
    alt="image 3"
    style={{
      width: "270px",
      height: "250px",
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transform: "translateY(-120px)",
      transition: "0.3s ease"
    }}
  />
</div>


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
<section id="work" style={{ padding: "60px 20px", textAlign: "center" }}>
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
        href="https://wa.me/27659890691"
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
        href="mailto:mainlinerandyptyltd@email.com"
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

{/* FAQ / TERMS & CONDITIONS SECTION */}
<section
  id="faq"
  style={{
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    scrollMarginTop: "100px"
  }}
>
  <h2 style={{ textAlign: "center", fontSize: "20px" }}>
    FAQ / Terms & Conditions
  </h2>

<div
  style={{
    marginTop: "30px",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#fff",
    lineHeight: "1.8",
    color: "#333"
  }}
>

  <p>
    Welcome to <strong>Mainline Randy (MLR)</strong>. By accessing our website or using our services, you agree to the following terms and conditions.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>1. Our Services</h3>
  <p>
    MLR provides professional website design, development, and digital solutions tailored to business needs. All services are delivered as outlined in an approved quotation or proposal.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>2. Quotations & Acceptance</h3>
  <p>
    All quotations are valid for 14 days unless otherwise stated.
    Acceptance of a quotation, whether in writing or through payment, confirms your agreement to proceed and be bound by these terms.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>3. Payment Terms</h3>
  <p>
    A 50% non-refundable deposit is required before work begins.
    The remaining 50% is due upon completion, before final delivery or website launch.
    Clients must use their quotation or invoice number as the payment reference.
    Proof of payment must be submitted to confirm allocation.
    Failure to comply with payment terms may result in delays.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>4. Refund Policy</h3>
  <p>
    All payments are non-refundable. Due to the nature of digital services and time investment, refunds are not provided once work has commenced.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>5. Project Timelines</h3>
  <p>
    Project timelines are estimates and depend on client responsiveness. Delays in providing content, feedback, or approvals may affect delivery timelines.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>6. Client Responsibilities</h3>
  <p>
    Clients are responsible for:
    <br />• Providing all required content and information
    <br />• Ensuring content is lawful and does not infringe on any rights
    <br />• Responding to communication in a timely manner
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>7. Revisions & Changes</h3>
  <p>
    Projects include a reasonable number of revisions. Additional changes outside the agreed scope may incur additional charges.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>8. Ownership</h3>
  <p>
    Full ownership of the website is transferred only after final payment has been received.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>9. Third-Party Services</h3>
  <p>
    MLR may utilise third-party services such as hosting providers or plugins. We are not responsible for downtime or issues caused by these providers.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>10. Limitation of Liability</h3>
  <p>
    MLR is not liable for any indirect or consequential damages, including loss of business or revenue.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>11. Data Protection</h3>
  <p>
    We respect your privacy and comply with the Protection of Personal Information Act (POPIA). Your information will only be used for business purposes.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>12. Governing Law</h3>
  <p>
    These terms are governed by the laws of the Republic of South Africa.
  </p>

  <h3 style={{ fontWeight: "bold", marginTop: "25px" }}>13. Contact Us</h3>
  <p>
    If you have any questions regarding these terms, please contact us directly.
  </p>

</div>
</section>




</main>
);
}
