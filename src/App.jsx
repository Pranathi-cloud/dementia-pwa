import React from 'react';
import './App.css';

// Built-in accessible SVG icons
const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
);

const BrainIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M12 5v13" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function App() {
  const handleAction = (featureName) => {
    alert(`Opening ${featureName}...`);
  };

  return (
    <div className="memory-app">
      {/* HEADER SECTION */}
      <header className="app-header">
        <div className="brand-badge">
          <div className="brand-icon">
            <HeartIcon />
          </div>
          <h1 className="app-title">Memory Care</h1>
        </div>
        <p className="app-subtitle">Welcome home. What would you like to do today?</p>
      </header>

      {/* MAIN CARDS CONTAINER */}
      <main className="main-content">
        <div className="cards-grid">

          {/* CARD 1: DAILY REMINDERS (Blue Theme) */}
          <section className="care-card card-schedule" aria-label="Daily Reminders Section">
            <div className="card-header">
              <div className="card-icon icon-schedule">
                <CalendarIcon />
              </div>
              <h2 className="card-title">Daily Reminders</h2>
            </div>
            <p className="card-description">
              View your medication schedule, daily appointments, and routine reminders.
            </p>
            <button 
              className="card-button button-schedule"
              onClick={() => handleAction("Daily Reminders")}
            >
              View Schedule
            </button>
          </section>

          {/* CARD 2: BRAIN & FUN ACTIVITIES (Teal Theme) */}
          <section className="care-card card-games" aria-label="Memory and Fun Section">
            <div className="card-header">
              <div className="card-icon icon-games">
                <BrainIcon />
              </div>
              <h2 className="card-title">Memory & Fun</h2>
            </div>
            <p className="card-description">
              Enjoy calming brain puzzles, view family photo albums, and listen to music.
            </p>
            <button 
              className="card-button button-games"
              onClick={() => handleAction("Memory & Fun")}
            >
              Start Activity
            </button>
          </section>

          {/* CARD 3: CAREGIVER & HELP (Rose/Coral Theme) */}
          <section className="care-card card-help" aria-label="Caregiver and Help Section">
            <div className="card-header">
              <div className="card-icon icon-help">
                <PhoneIcon />
              </div>
              <h2 className="card-title">Call Caregiver</h2>
            </div>
            <p className="card-description">
              Tap here anytime to call your primary caregiver, family member, or helper immediately.
            </p>
            <button 
              className="card-button button-help"
              onClick={() => handleAction("Caregiver Contact")}
            >
              Call Caregiver Now
            </button>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        <p className="footer-note">
          Need assistance? Tap <strong>"Call Caregiver Now"</strong> above anytime.
        </p>
      </footer>
    </div>
  );
}
