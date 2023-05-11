import React from 'react';
import './App.css';
import getImg from './img/images.jpg';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      btn: "Add",
      describe: props.describe,
      imgUrl: getImg,
    };
  };
    render() {
      const img= this.state.imgUrl;
      const clickBtn=()=>{
        console.log('clicked')
      }     
      return (
       <React.Fragment>
        <>
        <div className="card-container">
        <div className="card-1">
            <img src={img} alt='images'/>
            <h2 className='title'>{this.state.title}</h2>
            <h3 className='title'>{this.state.describe}</h3>
            <button onClick={clickBtn}>{this.state.btn}</button>
          </div>
          <div className="card-2">
            <img src={img} alt='images'/>
            <h2 className='title'>{this.state.title}</h2>
            <button onClick={clickBtn}>{this.state.btn}</button>
          </div>
          <div className="card-3">
            <img src={img} alt='images'/>
          </div>
          <div className="card-4">
            <img src={img} alt='images'/>
          </div>
          <div className="card-5">
            <img src={img} alt='images'/>
          </div>
          <div className="card-6">
            <img src={img} alt='images'/>
          </div>
          <div className="card-7">
            <img src={img} alt='images'/>
          </div>
          <div className="card-8">
            <img src={img} alt='images'/>
          </div>
        </div>
        </>
       </React.Fragment>
    )
  };

};
export default Card;

