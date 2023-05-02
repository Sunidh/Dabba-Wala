import React from 'react'
import { ThemeProvider } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {Table} from 'react-bootstrap';
import Image from './bg.jpeg'
import './Description.css'
import Menu from './Menu';
import Subscription from './Subscription';
export default function Description() {
  return (
    <div >
      
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
  <div className='slidebar'>
  <Carousel >
      <Carousel.Item interval={5000}>
        <img
          className=" w-100 h-500"
          src={Image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Veg Delights</h3>
          <p>You Cant miss Homemmade food after having this.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className=" w-100 h-500"
          src={Image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Mostly Preferred</h3>
          <p>Most of our Consumer Prefer the healthy food served by us.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 h-500"
          src={Image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Our Speciality</h3>
          <p>
           We will make your day better by serving best of our food.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  <Menu/>
  <Subscription/>
</ThemeProvider>
    </div>
  )
}
