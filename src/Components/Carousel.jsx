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
        <FaArrowAltCircleLeft className='left-arrow' onClick={this.previousSlide} />
        <img src={this.props.images[this.state.currentImageIndex]} alt='' />
        <FaArrowAltCircleRight className='right-arrow' onClick={this.nextSlide} />
      </div>
    );
  }
}

export default carousel;