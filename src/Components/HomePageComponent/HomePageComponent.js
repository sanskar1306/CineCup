import React, { useState, useEffect } from 'react';
import './HomePageStyle.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { init } from 'ityped';
import { Link } from 'react-router-dom';
import TextTransition, { presets } from 'react-text-transition';
import ScrollToTop from '../scrollToTop';
import ScrollAnimation from 'react-animate-on-scroll';
const TEXTS = [
  'Watch Trailers',
  'Rate and Review Movies',
  'Vote for Movies',
  'Share movie details',
];
const COLORS = ['#f06292', '#e040fb', '#43a047', '#f06292'];

function HomePageComponent() {
  console.log(presets);
  const user = useSelector(state => state.user);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex(index => index + 1), 4000);
  }, []);
  useEffect(() => {
    if (user.announcement) {
      const myElement = document.querySelector('#myElement');
      init(myElement, { showCursor: false, strings: user.announcement });
    }
  }, [user.announcement]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <div className='wrapper_home'>
        
        <div className='welcome_box'>
          <Grid container>
            <Grid item xs={12} md={5} className='welcome_text'>
              
              <h1>
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.default}
                  style={{ color: `${COLORS[index % COLORS.length]}` }}
                  // direction="up"
                  className='big'
                  delay={0}
                />
              </h1>
            </Grid>
            <Grid item xs={12} md={7} className='welcome_image'>
              <img
                src='https://templatemo.com/templates/templatemo_537_art_factory/assets/images/slider-icon.png'
                className='wel_image'
                alt='First Vector Graphic'
              />
            </Grid>
          </Grid>
        </div>
        <ScrollAnimation 
  animateIn='rollIn'>
        <Grid container className='section'>
          <Grid item xs={12} md={6} className='welcome_text'>
            <h1 className='heading_h'>Announcements</h1>
            <h3 className='text_home' id='type'>
              <div id='myElement'></div>
            </h3>
          </Grid>
        </Grid>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
        <Grid container className='section'>
          <Grid item xs={12} md={6} className='welcome_image'>
            <img
              src='https://templatemo.com/templates/templatemo_537_art_factory/assets/images/left-image.png'
              className='wel_image'
              alt='First Vector Graphic'
            />
          </Grid>
          
          <Grid item xs={12} md={6} className='welcome_text'>
            <h1 className='heading_h'>LeaderBoard</h1>
            <p className='text_home'>
              A place to look for the ranking of the movies in the current
              contest. Your movie not at the top ?? Do not worry you can search
              for it and you will get it's current rank and the no of votes it
              has got till now. You do not need to refresh the leaderboard is
              updated in realtime.
            </p>
            <Link to='/leaderboard'>
              <Button variant='outlined' color='secondary' small>
                Leaderboard
              </Button>
            </Link>
          </Grid>
        </Grid>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight'>
        <Grid container className='section'>
          <Grid item xs={12} md={6} className='imag'>
            <img
              src='https://templatemo.com/templates/templatemo_537_art_factory/assets/images/right-image.png'
              className='wel_image'
              alt='First Vector Graphic'
            />
          </Grid>

          <Grid item xs={12} md={6} className='welcome_text'>
            <h1 className='heading_h'>Nomination</h1>
            <p className='text_home'>
              Hey you can nominate your favourite movie for the award. Hey are
              you a movie fanatic and love a lot of movies ?? No worries needed
              you can nominate for 5 of your favourite movies, and do not forget
              to share your movie with your friends and increase it's chances of
              winning the contest.
            </p>
            <Link to='/search'>
              <Button variant='outlined' color='secondary' small>
                Nominate
              </Button>
            </Link>
          </Grid>
        </Grid>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
        <Grid container className='section'>
          <Grid item xs={12} md={6} className='imag'>
            <img
              src='https://lukaszadam.com/assets/downloads/javascript_illustration.svg'
              className='wel_image'
              alt='First Vector Graphic'
            />
          </Grid>
          <Grid item xs={12} md={6} className='welcome_text'>
            <h1 className='heading_h'>Ranking Algorithm</h1>
            <p className='text_home'>
              The movie with more votes will get a lower rank. But if two movies
              will have the same no of votes in a running contest then they will
              be ranked the same. If the two movies will have the same no of
              votes till the contest ends then they will be given the ranks
              decided by the cinecup team.
            </p>
          </Grid>
        </Grid>
        </ScrollAnimation>
      </div>

      <ScrollToTop />
    </>
  );
}

export default HomePageComponent;
