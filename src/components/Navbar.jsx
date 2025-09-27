import React, { useContext } from "react";
import { FaBars, FaHome, FaSearch, FaSignOutAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";

export default function Navbar({ onToggleSidebar }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Toggle sidebar handler
  const handleToggle = () => {
    if (typeof onToggleSidebar === "function") {
      onToggleSidebar();
    } else {
      document.body.classList.toggle("sidebar-collapsed");
    }
  };

  // Logout handler with SweetAlert2 confirmation
  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You won't be able to cancel this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7a46e2",
      cancelButtonColor: "#F39C12",
      confirmButtonText: "Yes, log out!",
      cancelButtonText: "Cancel",
      background: "#f4f6f9",
      color: "#7a46e2",
      customClass: {
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn",
      },
    });

    if (result.isConfirmed) {
      try {
        await logout();               // Clears user state and cookies
        navigate("/");           // Redirect to login page
        Swal.fire("Logged Out", "You have successfully logged out.", "success");
      } catch (err) {
        console.error("Logout failed", err);
        Swal.fire("Error", "Logout failed. Try again.", "error");
      }
    }
  };

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search?.value?.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-dark" >
      {/* Left Section */}
      <div className="nav-left">
        <button className="icon-btn" onClick={handleToggle} aria-label="Toggle sidebar">
          <FaBars />
        </button>
        <span>&nbsp;   &nbsp;</span>
        <Link className="nav-link home-link" to="/dashboard" title="Home">
          <FaHome className="home-icon" />
        </Link>
      </div>

      {/* Center Section - Search */}
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

      {/* Right Section - User Info and Logout */}
      <div className="nav-right">
        <div className="user-info">
          <span className="user-name">{user?.username || user?.fullName}</span>
        </div>

        <button className="logout-btn" onClick={handleLogout} title="Logout">
          <FaSignOutAlt />
          <span className="logout-text">Logout</span>
        </button>
      </div>
    </nav>
  );
}
