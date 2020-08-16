import React , { Suspense, lazy } from 'react';
import './App.css';
import Card from './components/card';
import Detail from './components/cardDetails';
import { Router, Route, Link, IndexRoute, Switch } from 'react-router';

  

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data : []
      }
      this.changes = this.changes.bind(this);
  }
  
 changes = (id) => {
   alert(id)
  this.setState({
    redirect : true
  })
}

  
  componentDidMount() {
      fetch("http://starlord.hackerearth.com/recipe")
      .then(response => response.json())
      .then(datum => {
            this.setState({
                data : datum
            })
          }) 
  }

   
  render() {
    if(this.state.redirect) {
      return (
       <div>
         <Detail />
       </div>
      )
    }
  const cardData =
   this.state.data.map(card =>
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
          <div className="cards">
               {cardData}
            </div>
        )
    }
}

export default App;
