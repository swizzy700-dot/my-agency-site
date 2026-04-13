"use client";

export default function Navbar() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderBottom: "1px solid #ddd",
      background: "white"
    }}>
      <h2 style={{ fontWeight: "bold" }}>MLR</h2>

      <nav style={{ display: "flex", gap: "20px" }}>
        <a href="#">Home</a>
        <a href="#services">Services</a>
        <a href="#faq" style={{ cursor: "pointer" }}>
  FAQ
</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}