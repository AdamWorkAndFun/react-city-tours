import React, { Component } from 'react'
import './Tour.scss';
export default class Tour extends Component {
  state={
    showinfo:false
  }
  hamdleInfo=()=>this.setState({showinfo:!this.state.showinfo})
  render() {
    const{id,city,img,name,info}=this.props.tour
    const{removeTour}=this.props
    return (
      <article className="tour">
       <div className="img-container">
        <img src={img} alt=""></img>
       <span className="close-btn" onClick={()=>{removeTour(id)}}>
       <i className="fas fa-window-close"/>
       </span>
       </div>
       <div className="tour-info">
       <h3>{city}</h3>
       <h4>{name}</h4>
       <h5>info<span onClick={this.hamdleInfo}><i className="fas fa-caret-down"/></span></h5>
        {this.state.showinfo &&  <p>{info}</p>}
       </div>
      </article>
    )
  }
}
