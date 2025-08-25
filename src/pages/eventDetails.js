import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../useFetch";
import "bootstrap-icons/font/bootstrap-icons.css";

const EventDetails = () => {
  const { title } = useParams();

  const { data, loading, error } = useFetch(
    `https://meet-up-lime.vercel.app/events/${title}`
  );

  console.log(data);

  if (loading) {
    return <p className="text-center mt-5">Loading event details...</p>;
  }

  if (error) {
    return <p className="text-center mt-5 text-danger">Error: {error}</p>;
  }

  if (!data) {
    return <p className="text-center mt-5">Event not found.</p>;
  }

  return (
    <>
      <Header />
      <div className="container mt-5">
        {/* <Link to="/" className="btn btn-secondary mb-3">
          ← Back to Events
        </Link> */}
        <div className="row">
          <div className="col-md-8">
            <h2>{data.title}</h2>
            <div className="card mb-3">
              <img src={data.image} className="card-img-top" alt="event-img" />
              <div className="card-body">
                <h5 className="card-title">
                  <strong>Host: </strong>
                  {data.host}
                </h5>
                <p className="card-text">{data.details}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="card-text mb-2">
                  <p>
                    <strong>Venue: </strong>
                    {data.venue}
                  </p>
                  <p>
                    <strong>Duration: </strong>
                    {data.duration}
                  </p>
                  <p>
                    <strong>Price: ₹</strong>
                    {data.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-text mb-2">
                    <p>
                      <i class="bi bi-person-bounding-box"></i>
                      <strong> Speaker: </strong>
                      {data.speaker}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-text mb-2">
                    <p>
                      <strong> Tags: </strong>
                      <p>
                        {data.tags.map((tag) => (
                          <p className="btn btn-primary m-2">{tag}</p>
                        ))}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-text mb-2">
                    <p>
                      <strong> Information: </strong>
                      <p>
                        {data.information.map((info) => (
                          <p className="m-2">{info}</p>
                        ))}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetails;
