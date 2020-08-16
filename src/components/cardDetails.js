import React  from 'react';
import featherheart from '../assets/icons/featherheart.png';

function Detail(props) {
        return (
            <div className="card" onClick ={() => props.changes(props.id)} >
            <label class="label">{props.label == "" ? "Label" : props.label}</label>
            <img className="cardImg" src={props.src} alt="Image" />
            <div className="flex">
                 <p>{props.name} </p>
                 <p><img  src={featherheart} alt="Icon" /> </p>
            </div>
            <div className="desc">
                {props.description}
            </div>
        </div>
        )
    }


export default Detail;