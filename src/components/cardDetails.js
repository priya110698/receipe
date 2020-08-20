import React  from 'react';
import featherheart from '../assets/icons/featherheart.png';
import JSON from '../json';
import { render } from '@testing-library/react';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            id : props.id
        }
    }

    // componentDidMount() {
    //     fetch("http://starlord.hackerearth.com/recipe")
    //     .then(response => response.json())
    //     .then(datum => {
    //           this.setState({
    //               data : datum
    //           })
    //         }) 
    // }
  
    render() {
        const cardData =
        JSON.map(card => 
        (card.id == this.state.id ) ? 
         <div className="cardDetail">
        <div className="f1">
          <label class="label">{card.label == "" ? "Label" : card.label}</label>
          <img  src={featherheart} alt="Icon" className="fav" /> 
          <img className="cardImg" src={card.image} alt="Image" />
          </div>
        
        <div>
         <div className="flex">
              <p className="txt-overflow">{card.name} </p>
         </div>
         <div className="desc">
             {card.description}
         </div>
         </div>

     </div>
         : console.log("id="+this.state.id) );
       
        return (
        <div>
            <p>{cardData}</p>
        </div>
        )
    }
}


export default Detail;
