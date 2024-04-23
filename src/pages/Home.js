import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Main.css'; // Import CSS file for styling
import { MdDashboard ,MdLeaderboard, MdLogout,MdOutlineMenu , MdEmail, 
    MdNotifications , MdAccountCircle , MdClose ,MdPhone,
    MdThumbUpAlt ,MdSubscriptions ,MdGroups,MdForum 
    ,MdFacebook} from "react-icons/md";
import { IoMdPerson ,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin ,IoMdAdd } from "react-icons/io";
const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogout=()=>{
        localStorage.removeItem("loggedin");
        navigate("/login");
    }
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to open the sidebar
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`grid-container ${sidebarOpen ? 'sidebar-responsive' : ''}`}>
      {/* Header */}
      <header className="header">
        <div className="menu-icon" onClick={openSidebar}>
          <span className="material-icons-outlined"><MdOutlineMenu /></span>
        </div>
        <div className="header-left">
          <span className="material-icons-outlined">search</span>
        </div>
        <div className="header-right">
          <span className="material-icons-outlined"><MdNotifications /></span>
          <span className="material-icons-outlined"><a href="mailto:hibamahboob11@gmail.com"><MdEmail /></a></span>
          <span className="material-icons-outlined"><MdAccountCircle /></span>
        </div>
      </header>
      {/* End Header */}

      {/* Sidebar */}
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <h2>{userName.name}</h2>
          </div>
          <span className="material-icons-outlined" onClick={closeSidebar}><MdClose />close</span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined" ><MdDashboard /></span> Dashboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><MdLeaderboard /></span> Leaderboard
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <span className="material-icons-outlined"><MdPhone /></span> Support
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="https://hibamahboob587.github.io/hiba/">
              <span className="material-icons-outlined"><IoMdPerson /></span> Portfolio
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="#">
              <button onClick={handleLogout} type='button' id='logout' ><span className="material-icons-outlined"><MdLogout /></span> Logout</button>
            </a>
          </li>
        </ul>
      </aside>
      {/* End Sidebar */}

      {/* Main */}
      <main className="main-container">
        <div className="main-title">
          <h2>DASHBOARD</h2>
        </div>

        <div className="main-cards">
          <a href="https://www.facebook.com/" className="link">
            <div className="card">
              <div className="card-inner">
                <h2>LIKES</h2>
                <span className="material-icons-outlined">  <MdThumbUpAlt /></span>
              </div>
              <h1>50k</h1>
            </div>
          </a>
          <a href="https://www.youtube.com/" className="link">
            <div className="card">
              <div className="card-inner">
                <h2>SUBSCRIBERS</h2>
                <span className="material-icons-outlined"><MdSubscriptions /></span>
              </div>
              <h1>10k</h1>
            </div>
          </a>
          <a href="https://www.instagram.com/?hl=en" className="link">
            <div className="card">
              <div className="card-inner">
                <h2>FOLLOWERS</h2>
                <span className="material-icons-outlined"><MdGroups /></span>
              </div>
              <h1>6.5k</h1>
            </div>
          </a>
          <div className="card">
            <div className="card-inner">
              <h2>MESSAGES</h2>
              <span className="material-icons-outlined"><MdForum /></span>
            </div>
            <h1>100</h1>
          </div>
        </div>

        <div className="products">
          <div className="product-card">
            <h2 className="product-description">Latest Updates</h2>
            <p className="text-secondary">Nice You are Improving... Keep It Up</p>
            <button type="button" className="product-button">
              <span className="material-icons-outlined"><IoMdAdd /></span>
            </button>
          </div>

          <div className="social-media">
            <div className="product">
              <div>
                <div className="product-icon background-blue">
                <IoLogoTwitter />
                </div>
                <h1 className="text-green">+274</h1>
                <p className="text-secondary">Your Twitter Account is Perfect. </p>
              </div>
              <div>
                <div className="product-icon background-red">
                <IoLogoInstagram />
                </div>
                <h1 className="text-green">+352</h1>
                <p className="text-secondary">Your instagram Account is Good</p>
              </div>
              <div>
                <div className="product-icon background-blue">
                <MdFacebook />
                </div>
                <h1 className="text-red">-126</h1>
                <p className="text-secondary">Keep Improving</p>
              </div>
              <div>
                <div className="product-icon background-blue">
                <IoLogoLinkedin />
                </div>
                <h1 className="text-green">+102</h1>
                <p className="text-secondary">You Got A Job Offer.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* End Main */}
    </div>
  );
};

export default Home;
