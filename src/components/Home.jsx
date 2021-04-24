import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import Footer from "./Footer";
import Navbar from "./Navbar";
import hero_image from "../assets/img/hero_image.jpg";
import hero_caption from "../assets/img/hero_caption.png";
import SearchIcon from '@material-ui/icons/Search';
import flight from "../assets/img/Bookings/flight.jpg";
import hotel from "../assets/img/Bookings/hotel.jpg";
import pack from "../assets/img/Bookings/package.jpg";
import { Card, Grid, TextField, Typography, Button,Paper } from "@material-ui/core";
import "../assets/css/home.css";
import "../assets/css/covid.css";
import StateCarousel from "./StateCarousel";
import DestinationCarousel from "./DestinationCarousel";
import FoodCarousel from "./FoodCarousel";
import Dashboard from "./Dashboard";

import firebase from 'firebase/app'
import 'firebase/firestore'

const Home = () => {
  useEffect(() => {
    firebase.firestore().collection('rating').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        localStorage.setItem(`${doc.data().id + '_count'}`, `${doc.data().count}`);
        localStorage.setItem(`${doc.data().id + '_user'}`, `${doc.data().user}`);
      });
    })
  }, []);

  return (
    <>
      <Navbar />
      <div className='hero-image'>
        <div className="hero-caption-container">
          {/* <img src={hero_caption} alt="hero-caption" className="hero-caption" /> */}
          <Paper style={{ margin: "1% 10% 10% 10%",borderRadius:'40px',padding:'2%'}} elevation={3}>
            <Grid container >
            <Grid item lg={3} xs={12} style={{ padding: "2% 2% 1% 2%" }} >
                <Typography align="left">
                  <strong>Location</strong>
                </Typography>
                <input type="name" id="exampleFormControlInput1" placeholder="Where are you going ?" style={{float:'left',width:'100%'}}/>
              </Grid>
              <Grid item lg={3} xs={6} style={{ padding: "2% 2% 1% 2%" }}>
                <Typography align="left">
                  <strong>Check in</strong>
                </Typography>
                <Typography align="left">
                      Add dates
                    </Typography>
              </Grid>
              <Grid item lg={3} xs={6}style={{ padding: "2% 2% 1% 2%"}}>

                <Typography align="left">
                  <strong>Check Out</strong>
                </Typography>
                <Typography align="left">
                      Add dates
                    </Typography>

              </Grid>
              <Grid item lg={3}xs={12} style={{ padding: "2% 2% 1% 2%"}}>
                <Grid container>
                  <Grid item lg={6} xs={6}>
                    <Typography align="left">
                      <strong>Guests</strong>
                    </Typography>
                    <Typography align="left">
                      Add guests
                    </Typography>
                  </Grid>
                  <Grid item lg={6} xs={6}>
                   <Button variant="contained" color="secondary" style={{borderRadius:'25px',width:'100%',height:'100%',padding:'0'}}>
                     <SearchIcon/> Search
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <section id="shorcuts">
            <h2 className="header mb-3 explore" style={{color:'#fff'}}>MAKE YOUR PLANS</h2>
            <div className="card-deck">
              <div className="card">
                <a href="/book-flights" className="card-link">
                  <img src={flight} className="card-img-top" alt="Flight" />
                  <span>BOOK FLIGHT</span>
                </a>
              </div>
              <div className="card">
                <a href="/book-hotels" className="card-link">
                  <img src={hotel} className="card-img-top" alt="Hotel" />
                  <span>BOOK HOTELS</span>
                </a>
              </div>
              <div className="card">
                <a href="/book-package" className="card-link">
                  <img src={pack} className="card-img-top" alt="package" />
                  <span>BOOK PACKAGE</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Dashboard />
      <main className="main-container ">
        <section id="video" className='mt-3'>
          <h2 className="header mb-4 ">INDIA AT A GLANCE </h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/77czO8sxABI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>
        <section className="top-states my-5">
          <h2 className="header">EXPLORE STATES</h2>
          <StateCarousel />
        </section>
        <section className="top-states my-5" id='top-destinations'>
          <h2 className="header">TOP DESTINATIONS</h2>
          <DestinationCarousel />
        </section>
        <section className="top-states my-5">
          <h2 className="header">EXPLORE FOODS</h2>
          <FoodCarousel />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home