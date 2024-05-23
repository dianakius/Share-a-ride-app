import React from 'react';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const handleClick = () => {
    const searchSection = document.getElementById('search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero-container'>
            <h1>LET'S RIDE!</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleClick} // Smooth scroll to search section
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;













































// import React from 'react';
// import { Button } from './Button';
// import './HeroSection.css';

// function HeroSection() {
//   return (
//     <div className='hero-container'>
//       <video src='/videos/video-1.mp4' autoPlay loop muted />
//       <h1>LET'S RIDE!</h1>
//       <p>What are you waiting for?</p>
//       <div className='hero-btns'>
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//         >
//           GET STARTED
//         </Button>

//         <a href='#search'>yyyyea</a>
//         {/* <Button
//           className='btns'
//           buttonStyle='btn--primary'
//           buttonSize='btn--large'
//           onClick={console.log('hey')}
          
//         >
//           EMPTY SPACE <i className='far fa-play-circle' />
//         </Button> */}
//       </div>
//     </div>
//   );
// }

// export default HeroSection;