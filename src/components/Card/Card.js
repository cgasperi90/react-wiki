import React from "react";
import styles from "./Card.module.scss";

const Card = ({results}) => {
    let display;

    if(results) {
      console.log("Results");
      display = results.map((x) => {
        let { id, image, name, status, location } = x;
        
        let renderStatus = (() => {

        if(status === "Alive") {
          return (
            <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
          );
        } else if (status === "Dead") {
          return (
            <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
          );
        } else {
          return (
            <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
          );
        }
      });

        return (
          <div key={id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
            <div className={`${styles.card} d-flex flex-column justify-content-center`}>
              <img alt={name} className={`${styles.img} img-fluid`} src={image} />
              {renderStatus()}
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                  <div className="">
                    <div className="fs-6 fw-normal">Last Location</div>
                    <div className="fs-5">{location.name}</div>
                  </div>
              </div>
            </div>
          </div>
        )
      })
    } else {
      console.log("No results.");
      display = "No Characters Found :/";
    }

    return (<>{display}</>);
  }


  export default Card;