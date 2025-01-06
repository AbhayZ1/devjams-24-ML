import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";
import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails.jsx";
import UserSuggestions from "./components/UserSuggestions/UserSuggestions.jsx";
import AddPlace from "./components/AddPlace/AddPlace.jsx";

const App = () => {
  const appStyles = {
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    margin: "0",
    padding: "0",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(135deg, #4caf50, #81c784, #2196f3)",
    animation: "backgroundAnimation 10s infinite alternate",
    overflow: "hidden",
  };

  const navbarStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "15px 0",
    position: "sticky",
    top: "0",
    zIndex: "10",
    width: "100%",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
    transition: "color 0.3s ease, transform 0.3s ease",
  };

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  return (
    <div style={appStyles}>
      <style>
        {`
          @keyframes backgroundAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          body {
            margin: 0;
            overflow: hidden;
          }
          a:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <Router>
        {/* Navbar */}
        <nav style={navbarStyles}>
          <Link
            to="/"
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.color = "#81c784")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.color = "#81c784")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Restaurants
          </Link>
          <Link
            to="/details"
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.color = "#81c784")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Details
          </Link>
          <Link
            to="/suggestions"
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.color = "#81c784")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Suggestions
          </Link>
          <Link
            to="/add-place"
            style={linkStyles}
            onMouseOver={(e) => (e.target.style.color = "#81c784")}
            onMouseOut={(e) => (e.target.style.color = "white")}
          >
            Add Place
          </Link>
        </nav>

        {/* Routes */}
        <div style={containerStyles}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/restaurants" element={<RestaurantList />} />
            <Route path="/details" element={<RestaurantDetails />} />
            <Route path="/suggestions" element={<UserSuggestions />} />
            <Route path="/add-place" element={<AddPlace />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
