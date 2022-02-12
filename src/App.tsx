import React from 'react';
import Segment from './components/Info';
import logo from './logo.png';
import './App.css';
import Button from './components/Info';

interface IData {
  nama: string;
  kelas: string;
  iskelasPagi: boolean;
}

class Component1 extends React.Component<any,IData, any> {
  constructor (props:any){
    super(props);

    this.state = {
      nama: 'Nama : Erin Sondra',
      kelas: 'Kelas : XI IPS 1',
      iskelasPagi: true,
    }
  }

  render() {
    const {nama, kelas, iskelasPagi}= this.state;
    return (
      <div style={{textAlign:'center'}}>
        <h4>{nama}</h4>
        <p>{kelas}</p>
        {iskelasPagi == true &&
          <p>
           kelas pagi = TRUE
          </p>
        }
     </div>
    )
 }
} 

interface IState {
  counter:number;
}

class Component2 extends React.Component<any,IState> {
  constructor(props:any) {
    super(props);
 
    this.state = {
      counter: 1,
    }
  }

  handleClick = () => {
    console.log("button clicked....");
    this.setState ({
      counter: this.state.counter + 1,
    });
  }
 

 render() {
     console.log("render called...")
     return(
      <>

       <div style={{textAlign:'center'}}>

        <p>
          {this.state.counter}
        </p>
          <Button 
            border = "none"
            color = "none"
            height= "35px"
            onClick={this.handleClick}
            width= "65px"
            childern= "Click"
        />
        <br></br>
        {this.state.counter %3 == 0 &&
           <img src = 'https://i.pinimg.com/236x/31/b7/74/31b77483e2a0da75c03fa1b4906ba3d8.jpg' ></img>
        } 
     </div>
     </>
   ) 
  }
}

export {
  Component1,
  Component2,
}
