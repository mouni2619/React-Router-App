import React from 'react';
import './App.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
// Functional component responsible for rendering individual cards
const Card = ({ data }) => {
    // Destructuring props to extract data for each card
    const { url, title, description, date } = data;

    return (
        <div className="col-md-4 mb-4 m">
            <div className="card h-100 maincard ">
                <img src={url} className="card-img-top" style={{ height: "130px" }} alt={title} />
                <div className="card-body cardbody">
                    <h6 className="card-title cardtitle">{title}</h6>
                    <p className="card-text text-muted cardpara">{description}</p>
                    <p className="readmore">READ MORE<KeyboardDoubleArrowRightIcon style={{ fontSize: "10px" }} /></p>
                </div>
                <div className="card-footer  bottomdate" style={{ color: "rgb(178, 174, 174)" }}>{date}</div>
            </div>
        </div>
    );
};

export default Card;
