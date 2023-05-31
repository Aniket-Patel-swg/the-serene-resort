import React, { Component } from 'react';
import '../assets/CSS/Carousel.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

class carousel extends Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className='carousel'>
        <div className="desctiption">
          <h1 className='carousel-heading'>{this.props.descriptions[this.state.currentImageIndex].title}</h1>
          <h3 className='carousel-small-heading'>{this.props.descriptions[this.state.currentImageIndex].smalltitle}</h3>
          <p className='carousel-description'>{this.props.descriptions[this.state.currentImageIndex].description}</p>
        </div>
        <div className="image-section">
        <FaArrowAltCircleLeft className='left-arrow' onClick={this.previousSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={this.nextSlide} />
        <img src={this.props.images[this.state.currentImageIndex]} alt='' />
        </div>
      </div>
    );
  }
}

export default carousel;