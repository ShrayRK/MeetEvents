import React, { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import EventDetails from "./eventDetails";

const HomePage = ({ searchData }) => {
  const { data, loading, error } = useFetch(
    "https://meet-up-lime.vercel.app/events"
  );

  const [filter, setFilter] = useState("Both");

  if (loading) {
    return <p className="text-center mt-5">Loading event details...</p>;
  }

  if (error) {
    return <p className="text-center mt-5 text-danger">Error: {error}</p>;
  }

  if (!data) {
    return (
      <div>
        <p>"Data not available.</p>
      </div>
    );
  }

  let filterEvents =
    filter === "Both"
      ? data
      : data.filter((event) => event.eventType.includes(filter));

  if (searchData.trim() !== "") {
    filterEvents = filterEvents.filter((event) =>
      (event.title?.toLowerCase() || "").includes(searchData.toLowerCase()) || 
      (event.tags || []).reduce((acc, tag) => acc + "" + (tag?.toLowerCase() || ""), "").includes(searchData.toLowerCase())
    );
  }

  return (
    <>
      <div className="mt-5">
        <section className="event-header">
          <h2>Events</h2>
          <select
            name="eventType"
            id="eventType"
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </section>
        <div>
          <ul className="row list-unstyled">
            {filterEvents.map((event) => (
              <li className="col-md-4 mt-5 d-flex" key={event._id}>
                <div className="card p-4 w-100 h-100 bg-transparent">
                  <img
                    src={event.image}
                    alt="Meet-Up"
                    className="card-img-top"
                    style={{objectFit: "cover", height: "200px"}}  
                  />
                  <div className="card-body d-flex flex-column">
                    <Link to={`/event/${event.title}`}>
                      <h4 className="card-title">{event.title}</h4>
                    </Link>
                    <p className="card-text mt-auto">
                      {new Date(event.timeAndDate).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                        timeZone: "Asia/Kolkata",
                      })}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
