import React , { Suspense, lazy } from 'react';
import './App.css';
import Card from './components/card';
import Detail from './components/cardDetails';
import JSON from './json';
import { Router, Route, Link, IndexRoute, Switch } from 'react-router';

  

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data : [],
          id : ''
      }
      this.changes = this.changes.bind(this);
      
  }
  
 changes = (id) => {
  //  alert(id)
  this.setState({
    redirect : true,
    id : id
  })
  return(
    <Detail />
  )
}

  
  // componentDidMount() {
  //     fetch(JSON)
  //     .then(response => response.json())
  //     .then(datum => {
  //           this.setState({
  //               data : datum
  //           })
  //         }) 
  // }

   
  render() {
    if(this.state.redirect) {
      return (
       <div>
         <Detail  id={this.state.id} />
       </div>
      )
    }
  const cardData =
   JSON.map(card =>
     <Card
      key={card["id"]} 
      id={card["id"]} 
      name={card["name"]}
      src={card["image"]} 
      category={card["category"]} 
      label={card["label"]} 
      price={card["price"]} 
      description={card["description"]} 
      changes={this.changes} 
      />);
        return (
        <div className="wrapper">
          <div className="masonry">
               {cardData}
            </div>
        </div>  
        )
    }
}

export default App;
