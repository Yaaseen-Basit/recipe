import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Image from './Image';

export default class RecipeCard extends Component {
	render(){
		console.log("PROPS=>", this.props);
		return(
          <div>
         	{this.props.meals.map((item, id) => {
         		return ( 
         			<Card 
         				key={id} 
         				href={item.strSource}>
         				<Image source={item.image}  />
         				<Title title={item.name} />
                         <p>Category: {item.category} </p>
                         <p>Price: <Title title= {item.price} /></p>

                         <p>{item.description}</p>
                        
                        
         			</Card> 
         		)
         	})}
          </div>
		)
	}
}

const Card = styled.a`
max-width: 350px;
width: 100%;
display: inline-block;
border-radius: 3px;
text-decoration: none;
color: #000;
margin: 0 10px 15px;
box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
     
  
   
`;
