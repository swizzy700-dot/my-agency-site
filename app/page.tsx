"use client";

import { useState } from "react";

import Image from "next/image";

export default function Home() {
  const [active, setActive] = useState<number | null>(null);
const [showFAQ, setShowFAQ] = useState(false);
  return (
    <main style={{
  fontFamily: "Arial",
  background: "linear-gradient(180deg, #f9fafb05 0%, #f5eeee2d 100%)",
  color: "#c1657f",
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
    padding: "12px",
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
      <section style={{ padding: "1px 80px", textAlign: "center" }}>
        <Image
  src="/logo.webp"
  alt="My Logo"
  width={900}
  height={400}
  priority
  style={{
    maxWidth: "110%",
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
    flexWrap: "wrap",
    position: "relative",
    zIndex: 1
  }}
>
  <Image
    src="/img1.webp"
    alt="image 1"
    width={270}
    height={250}
    loading="lazy"
    style={{
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transform: "translateY(-80px)",
      transition: "0.3s ease",
      pointerEvents: "none"
    }}
  />

  <Image
    src="/img2.webp"
    alt="image 2"
    width={270}
    height={250}
    loading="lazy"
    style={{
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transform: "translateY(-80px)",
      transition: "0.3s ease",
      pointerEvents: "none"
    }}
  />

  <Image
    src="/img3.webp"
    alt="image 3"
    width={270}
    height={250}
    loading="lazy"
    style={{
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transform: "translateY(-80px)",
      transition: "0.3s ease",
      pointerEvents: "none"
    }}
  />
</div>

<div className="bg-light" style={{ top: "10%", left: "15%" }}></div>
<div className="bg-light" style={{ top: "60%", right: "10%" }}></div>


        <p style={{ marginTop: "30px", fontSize: "15px", color: "#c1657f" }}>
MLR is positioned as a premium digital partner for businesses that seek more than just a website but a powerful, results-driven online presence.

We work with ambitious brands, growing enterprises, and forward-thinking business owners who understand that investing in quality digital infrastructure is essential for long-term success.

MLR is not designed for mass, low-cost production. Instead, we are dedicated to providing high-value, professionally executed digital solutions for clients who prioritise quality, reliability, and impact.
        </p>
      </section>

    {/* SERVICES */}
<section
  id="services"
  style={{
    padding: "60px 20px",
    position: "relative",
    zIndex: 10
  }}
>
  <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
    Our Services
  </h2>

  {/* GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "20px",
      maxWidth: "1000px",
      margin: "40px auto",
      alignItems: "start"
    }}
  >

    {/* CARD TEMPLATE STYLE (used in all cards) */}

    {/* CARD 1 */}
    <div
      onClick={() => setActive(prev => (prev === 1 ? null : 1))}
      style={{
        width: "100%",
        padding: "22px",
        borderRadius: "16px",
        border: "1px solid rgba(0,0,0,0.24)",
        background: active === 1 ? "#111" : "#ffffff06",
        color: active === 1 ? "#fff" : "#111",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        position: "relative",
        zIndex: active === 1 ? 10 : 1
      }}
    >
      <h3>Professional Website Design & Development</h3>

      <div
        style={{
          maxHeight: active === 1 ? "500px" : "0px",
          overflow: "hidden",
          opacity: active === 1 ? 1 : 0,
          transform: active === 1 ? "translateY(0px)" : "translateY(-10px)",
          transition: "all 0.35s ease"
        }}
      >
        <ul>
          <li>Business / Corporate Websites</li>
          <li>E-commerce Stores</li>
          <li>Landing Pages</li>
          <li>Portfolio Websites</li>
        </ul>
      </div>
    </div>

    {/* CARD 2 */}
    <div
      onClick={() => setActive(prev => (prev === 2 ? null : 2))}
      style={{
        width: "100%",
        padding: "22px",
        borderRadius: "16px",
        border: "1px solid rgba(0,0,0,0.24)",
        background: active === 2 ? "#111" : "#ffffff06",
        color: active === 2 ? "#fff" : "#111",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        position: "relative",
        zIndex: active === 2 ? 10 : 1
      }}
    >
      <h3>Website Setup & Launch</h3>

      <div
        style={{
          maxHeight: active === 2 ? "500px" : "0px",
          overflow: "hidden",
          opacity: active === 2 ? 1 : 0,
          transform: active === 2 ? "translateY(0px)" : "translateY(-10px)",
          transition: "all 0.35s ease"
        }}
      >
        <ul>
          <li>Domain setup</li>
          <li>Hosting setup</li>
          <li>Website deployment</li>
        </ul>
      </div>
    </div>

    {/* CARD 3 */}
    <div
      onClick={() => setActive(prev => (prev === 3 ? null : 3))}
      style={{
        width: "100%",
        padding: "22px",
        borderRadius: "16px",
        border: "1px solid rgba(0,0,0,0.24)",
        background: active === 3 ? "#111" : "#ffffff06",
        color: active === 3 ? "#fff" : "#111",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        position: "relative",
        zIndex: active === 3 ? 10 : 1
      }}
    >
      <h3>Website Maintenance & Support</h3>

      <div
        style={{
          maxHeight: active === 3 ? "500px" : "0px",
          overflow: "hidden",
          opacity: active === 3 ? 1 : 0,
          transform: active === 3 ? "translateY(0px)" : "translateY(-10px)",
          transition: "all 0.35s ease"
        }}
      >
        <ul>
          <li>Updates</li>
          <li>Technical support</li>
          <li>Backups</li>
        </ul>
      </div>
    </div>

    {/* CARD 4 */}
    <div
      onClick={() => setActive(prev => (prev === 4 ? null : 4))}
      style={{
        width: "100%",
        padding: "22px",
        borderRadius: "16px",
        border: "1px solid rgba(0,0,0,0.24)",
        background: active === 4 ? "#111" : "#ffffff06",
        color: active === 4 ? "#fff" : "#111",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        position: "relative",
        zIndex: active === 4 ? 10 : 1
      }}
    >
      <h3>Website Performance Optimization</h3>

      <div style={{
        maxHeight: active === 4 ? "500px" : "0px",
        overflow: "hidden",
        opacity: active === 4 ? 1 : 0,
        transition: "all 0.35s ease"
      }}>
        <ul>
          <li>Speed improvements</li>
          <li>Image optimization</li>
          <li>Performance tuning</li>
        </ul>
      </div>
    </div>

    {/* CARD 5 */}
    <div onClick={() => setActive(prev => (prev === 5 ? null : 5))} style={{
      width: "100%",
      padding: "22px",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.24)",
      background: active === 5 ? "#111" : "#ffffff06",
      color: active === 5 ? "#fff" : "#111",
      cursor: "pointer",
      position: "relative",
      zIndex: active === 5 ? 10 : 1
    }}>
      <h3>Branding & Website Package</h3>
      <div style={{
        maxHeight: active === 5 ? "500px" : "0px",
        overflow: "hidden",
        opacity: active === 5 ? 1 : 0,
        transition: "all 0.35s ease"
      }}>
        <ul>
          <li>Logo design</li>
          <li>Brand identity</li>
          <li>Full website design</li>
        </ul>
      </div>
    </div>

    {/* CARD 6 */}
    <div onClick={() => setActive(prev => (prev === 6 ? null : 6))} style={{
      width: "100%",
      padding: "22px",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.24)",
      background: active === 6 ? "#111" : "#ffffff06",
      color: active === 6 ? "#fff" : "#111",
      cursor: "pointer",
      position: "relative",
      zIndex: active === 6 ? 10 : 1
    }}>
      <h3>Integrations & Add-ons</h3>
      <div style={{
        maxHeight: active === 6 ? "500px" : "0px",
        overflow: "hidden",
        opacity: active === 6 ? 1 : 0,
        transition: "all 0.35s ease"
      }}>
        <ul>
          <li>Payment systems</li>
          <li>Booking systems</li>
          <li>Email marketing</li>
        </ul>
      </div>
    </div>

    {/* CARD 7 */}
    <div onClick={() => setActive(prev => (prev === 7 ? null : 7))} style={{
      width: "100%",
      padding: "22px",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.24)",
      background: active === 7 ? "#111" : "#ffffff06",
      color: active === 7 ? "#fff" : "#111",
      cursor: "pointer",
      position: "relative",
      zIndex: active === 7 ? 10 : 1
    }}>
      <h3>SEO Optimization</h3>
      <div style={{
        maxHeight: active === 7 ? "500px" : "0px",
        overflow: "hidden",
        opacity: active === 7 ? 1 : 0,
        transition: "all 0.35s ease"
      }}>
        <ul>
          <li>Google ranking</li>
          <li>Meta tags</li>
          <li>Speed SEO</li>
        </ul>
      </div>
    </div>

    {/* CARD 8 */}
    <div onClick={() => setActive(prev => (prev === 8 ? null : 8))} style={{
      width: "100%",
      padding: "22px",
      borderRadius: "16px",
      border: "1px solid rgba(0,0,0,0.24)",
      background: active === 8 ? "#111" : "#ffffff06",
      color: active === 8 ? "#fff" : "#111",
      cursor: "pointer",
      position: "relative",
      zIndex: active === 8 ? 10 : 1
    }}>
      <h3>Website Security</h3>
      <div style={{
        maxHeight: active === 8 ? "500px" : "0px",
        overflow: "hidden",
        opacity: active === 8 ? 1 : 0,
        transition: "all 0.35s ease"
      }}>
        <ul>
          <li>SSL setup</li>
          <li>Security plugins</li>
          <li>Protection</li>
        </ul>
      </div>
    </div>

  </div>
</section>
 

{/* REVIEWS */}
<section style={{ padding: "60px 20px", textAlign: "center" }}>
  <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
    Client Reviews
  </h2>

  <p style={{ opacity: 0.7, marginTop: "10px" }}>
    Trusted by businesses for quality, performance, and professionalism.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "40px"
    }}
  >

    {/* REVIEW 1 */}
    <div style={{
      background: "#111",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "280px"
    }}>
      <div style={{ color: "gold", marginBottom: "10px" }}>★★★★★</div>
      <p>
        The website performance is outstanding. Clean, fast, and highly professional.
      </p>
      <h4 style={{ marginTop: "10px" }}>— Business Owner</h4>
    </div>

    {/* REVIEW 2 */}
    <div style={{
      background: "#111",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "280px"
    }}>
      <div style={{ color: "gold", marginBottom: "10px" }}>★★★★★</div>
      <p>
        MLR delivered beyond expectations. Everything feels premium and smooth.
      </p>
      <h4 style={{ marginTop: "10px" }}>— Brand Founder</h4>
    </div>

    {/* REVIEW 3 */}
    <div style={{
      background: "#111",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      maxWidth: "280px"
    }}>
      <div style={{ color: "gold", marginBottom: "10px" }}>★★★★☆</div>
      <p>
        Strong communication and top-quality work. Highly recommended.
      </p>
      <h4 style={{ marginTop: "10px" }}>— Startup Client</h4>
    </div>

  </div>
</section>

      {/* PRICING */}
<section style={{ padding: "60px 20px", textAlign: "center" }}>
  <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
    Website Solutions
  </h2>

  {/* MAIN SERVICES */}
  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "40px"
  }}>

    <div style={{
      border: "1px solid rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "12px",
      width: "260px"
    }}>
      <h3>Professional Websites</h3>
      <p style={{ color: "#010101", marginTop: "10px" }}>
        Starting from $2,000
      </p>
    </div>

    <div style={{
      border: "1px solid rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "12px",
      width: "260px"
    }}>
      <h3>eCommerce Solutions</h3>
      <p style={{ color: "#010101", marginTop: "10px" }}>
        Starting from $3,000
      </p>
    </div>

    <div style={{
      border: "1px solid rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "12px",
      width: "260px"
    }}>
      <h3>Premium Custom Websites</h3>
      <p style={{ color: "#010101", marginTop: "10px" }}>
        From $3,500+
      </p>
    </div>

  </div>

  {/* ONGOING */}
  <h2 style={{ marginTop: "50px" }}>Ongoing Services</h2>

  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px"
  }}>

    <div style={{
      border: "1px solid rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "12px",
      width: "260px"
    }}>
      <h3>Website Care Plans</h3>
      <p style={{ color: "#010101", marginTop: "10px" }}>
        From $200/month
      </p>
    </div>

    <div style={{
      border: "1px solid rgba(0,0,0,0.2)",
      padding: "20px",
      borderRadius: "12px",
      width: "260px"
    }}>
      <h3>Managed Hosting</h3>
      <p style={{ color: "#010101", marginTop: "10px" }}>
        From $100/month
      </p>
    </div>

  </div>

  {/* NOTE + CTA */}
  <div style={{
    marginTop: "40px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
    opacity: 0.8
  }}>
    <p>
      Advanced features such as booking systems, payment integrations, and marketing tools are available as tailored add-ons.
    </p>

    <p style={{ marginTop: "10px" }}>
      Every project is uniquely structured based on your specific requirements.
      We invite you to get in touch for a tailored quotation.
    </p>

    <button
  onClick={() =>
    window.location.href =
      "mailto:mainlinerandyptyltd@email.com,info@mainlinemlr.com?subject=Quote Request from Website&body=Hi MLR,%0D%0A%0D%0AI would like to request a quote for a website project.%0D%0A%0D%0AThank you."
  }
  style={{
    marginTop: "20px",
    padding: "12px 25px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }}
>
  Request a Quote
</button>
  </div>
</section>


      {/* PORTFOLIO */}
<section id="work" style={{ padding: "50px 20px", textAlign: "center" }}>
  <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
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
<section id="contact" style={{ padding: "50px 20px", textAlign: "center" }}>

  <h2>Contact Us</h2>

  {/* ANIMATED BOX */}
  <div
    style={{
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px",
      border: "2px solid #00000063",
      borderRadius: "12px",
      background: "#ffffff",
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
    <p style={{ margin: "7px 0", fontSize: "15px" }}>
      📱 WhatsApp:{" "}
      <a
        href="https://wa.me/27659890691"
        target="_blank"
        style={{ color: "#c1657f", fontWeight: "500", textDecoration: "none" }}
<p style={{ margin: "50px 0", fontSize: "17px" }}>
      📞 Call:{" "}
      <a
        href="tel:+27659890691"
        target="_blank"
        style={{ color: "#c1657f", fontWeight: "500", textDecoration: "none" }}

    {/* Email */}
    <p style={{ margin: "1px 0", fontSize: "15px" }}>
      ✉️ Email:{" "}
      <a
  href="mailto:mainlinerandyptyltd@email.com,info@mainlinemlr.com"
        style={{ color: "#c1657f", fontWeight: "500", textDecoration: "none" }}

  </div>


{/* ABOUT COMPANY */}
<section
  id="about-company"
  style={{
    padding: "80px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "left",
    lineHeight: "1.8",
    color: "#111"
  }}
>
  <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
    About
  </h2>

  <p style={{ marginBottom: "20px" }}>
    Mainline Randy (MLR) is a premium digital solutions company dedicated to
    crafting sophisticated, high-performance websites for businesses that value
    excellence, credibility, and growth.
  </p>

  <p style={{ marginBottom: "20px" }}>
    In today’s competitive landscape, a website is far more than a digital
    presence it is a direct reflection of your brand’s quality, professionalism,
    and ambition. At MLR, we specialise in transforming ideas into refined digital
    experiences that not only capture attention but also inspire trust and drive
    meaningful engagement.
  </p>

  <p style={{ marginBottom: "20px" }}>
    Our approach is rooted in precision, attention to detail, and a deep
    understanding of modern business needs. Each website we create is thoughtfully
    designed to balance visual elegance with seamless functionality, ensuring an
    experience that is both impactful and intuitive.
  </p>

  <p style={{ marginBottom: "20px" }}>
    From corporate platforms and eCommerce solutions to strategic landing pages
    and content-driven websites, we deliver tailored digital solutions that
    elevate brand identity and position our clients ahead of the curve.
  </p>

  <p style={{ marginBottom: "40px" }}>
    At MLR, we do not simply build websites we create digital assets that
    enhance reputation, strengthen market presence, and support long-term
    business success.
  </p>

  {/* VISION */}
  <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
    Vision
  </h3>

  <p style={{ marginBottom: "30px" }}>
    To establish MLR as a leading name in premium digital solutions,
    recognised for delivering refined, high-quality websites that empower
    businesses to stand out, scale, and succeed in a digital-first world.
  </p>

  {/* MISSION */}
  <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
    Mission
  </h3>

  <p>
    Our mission is to provide exceptional website solutions that combine modern
    design, advanced functionality, and strategic thinking. We are committed to
    helping businesses build a strong, credible online presence that not only
    attracts attention but converts it into real opportunities.
  </p>
</section>

{/* PROJECTS SECTION */}
<section
  id="projects"
  style={{
    padding: "50px 20px",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "25px", marginBottom: "40px" }}>
    MLR Projects
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap"
    }}
  >

    {/* CARD 1 */}
    <div className="project-card">
      <h3>Project 1</h3>
      <p>Website link</p>
      <button>View Project</button>
    </div>

    {/* CARD 2 */}
    <div className="project-card">
      <h3>Project 2</h3>
      <p>Website link</p>
      <button>View Project</button>
    </div>

    {/* CARD 3 */}
    <div className="project-card">
      <h3>Project 3</h3>
      <p>Website link</p>
      <button>View Project</button>
    </div>

  </div>
</section>


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
    padding: "50px 20px",
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
    border: "1px solid #dddddd",
    borderRadius: "12px",
    background: "#ffffff00",
    lineHeight: "1.8",
    color: "#111010"
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


{/* FOOTER */}
<footer
  style={{
    padding: "40px 20px",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    marginTop: "60px",
    color: "#555"
  }}
>
  <p style={{ marginBottom: "10px", fontWeight: "500" }}>
    Mainline Randy (MLR)
  </p>

  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
    Premium Digital Solutions • Websites that build credibility & growth


  </p>


<p style={{ fontSize: "12px", marginBottom: "8px" }}>
   All content, designs, text, graphics, and intellectual property on this website are the exclusive property of Mainline Randy (MLR) and may not be reproduced, distributed, or used without prior written consent.
 

  </p>


  <p style={{ fontSize: "13px", color: "#888" }}>
    © {new Date().getFullYear()} MLR. All Rights Reserved.
  </p>
</footer>

</main>
);
}

