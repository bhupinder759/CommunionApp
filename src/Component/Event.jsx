import React, { useState } from "react";
import "./Event.css";
import Particles from './Particles';

// Image imports for categories
import religiousImage from "../assets/religious.jpg";  // Replace with actual images
import socialImage from "../assets/social.jpg";
import charityImage from "../assets/charity.jpg";
import Footer from "./Footer";

const initialEvents = [
  {
    id: 1,
    title: "Christmas Charity Drive",
    date: "Saturday, March 15, 2025",
    time: "5:30 AM IST",
    location: "Community Hall",
    category: "Charity",
    image: charityImage,  // Use category-specific images
  },
  {
    id: 2,
    title: "Community Prayer",
    date: "Sunday, March 20, 2025",
    time: "10:00 AM IST",
    location: "Church",
    category: "Religious",
    image: religiousImage,
  },
];

const Event = () => {
  const [events, setEvents] = useState(initialEvents);
  const [category, setCategory] = useState("All");
  const [showForm, setShowForm] = useState(false); // Used for form visibility
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    category: "Charity",
  });

  const filteredEvents =
    category === "All"
      ? events
      : events.filter((event) => event.category === category);

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time) return;

    // Map the category to the correct image
    const categoryImages = {
      Religious: religiousImage,
      Social: socialImage,
      Charity: charityImage,
    };

    const newEventData = {
      ...newEvent,
      id: events.length + 1,
      location: "Unknown",
      image: categoryImages[newEvent.category], // Use the mapped image
    };
    setEvents([...events, newEventData]);
    setNewEvent({ title: "", date: "", time: "", category: "Charity" });
    setShowForm(false); // Hide form after submitting
  };

  return (
    <>
    <div className="particles">
    <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  <h2>We Helped Communities Connect & Flourish <br />
  <span>✦ Upcoming Events</span></h2>
</div>
    <div className="event-container">
      <div className="filter-options">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Events</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
      </div>

      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Add Event Button */}
      <button className="add-event-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Add Event"}
      </button>

      {/* Add Event Form (Only Shows When Button is Clicked) */}
      <div className={`add-event-form ${showForm ? "show" : ""}`}>
        <h3>Add New Event</h3>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="time"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <select
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        >
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button onClick={addEvent}>Save Event</button>
      </div>
    </div>

    {/* <Footer></Footer> */}

    </>
  );
};

const EventCard = ({ event }) => (
    <>
  <div className="event-card">
    <div className="event-image">
      <img src={event.image} alt={event.title} />
      <div className="event-date">
        <span>{new Date(event.date).toLocaleString("default", { month: "short" }).toUpperCase()}</span>
        <strong>{new Date(event.date).getDate()}</strong>
      </div>
    </div>
    <span className="event-category">{event.category}</span>
    <h3>{event.title}</h3>
    <p>
      <i className="icon-calendar"></i> {event.date}
    </p>
    <p>
      <i className="icon-clock"></i> {event.time}
    </p>
    <a href="#" className="event-link">
      Event Details →
    </a>
  </div>
  
  </>
);

export default Event;
