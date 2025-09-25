import React, { useContext } from "react";
import { FaBars, FaHome, FaSearch, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";

export default function Navbar({ onToggleSidebar }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // toggle the sidebar (if parent passed handler) or toggle body class fallback
  const handleToggle = () => {
    if (typeof onToggleSidebar === "function") {
      onToggleSidebar();
    } else {
      document.body.classList.toggle("sidebar-collapsed");
    }
  };

  // Logout with SweetAlert2 confirm
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You won't be able to cancel this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1A237E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
      background: "#f4f6f9",
      color: "#1A237E",
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn",
      },
    });

    if (result.isConfirmed) {
      try {
        await logout();            // uses AuthContext.logout()
        navigate("/");       // send user to login page
      } catch (err) {
        console.error("logout failed", err);
        Swal.fire("Error", "Logout failed. Try again.", "error");
      }
    }
  };

  // search handler - navigates to /search?q=...
  const handleSearch = (e) => {
    e.preventDefault();
    const q = e.target.search?.value?.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="main-header navbar">
      <div className="nav-left">
        <button className="icon-btn" onClick={handleToggle} aria-label="Toggle sidebar">
          <FaBars />
        </button>

        <a className="nav-link home-link" href="/" title="Home">
          <FaHome className="home-icon" />
          <span className="home-text">Home</span>
        </a>
      </div>

      <div className="nav-center">
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-wrapper">
            <input
              name="search"
              type="search"
              placeholder="Search..."
              className="search-input"
              aria-label="Search"
              autoComplete="off"
            />
            <button type="submit" className="icon-btn search-btn" aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>

      <div className="nav-right">
        <div className="user-info">
          <span className="user-name">{user?.fullName || user?.name || "Admin"}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <FaSignOutAlt />
          <span className="logout-text">Logout</span>
        </button>
      </div>
    </nav>
  );
}
