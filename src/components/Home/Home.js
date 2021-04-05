import React from "react";
import style from "./Home.module.css";
import video from "./Video/video.mp4";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Button } from 'antd';
import { Link } from "react-router-dom";


const Home = () => {
  return (
      <div className={style.container}> 
        <Header />
    <video autoPlay loop muted className={style.video}
    >
      <source src={video} type="video/mp4" />
    </video>
    <article className={style.quotePart}>
     <h1 className={style.quote}> “Man cannot discover new oceans unless he has the courage to lose sight of the shore.”</h1>
     <h5 className={style.author}>
     – Andre Gide
     </h5>
     </article>
     <article className={style.joinPart}>
     <Link to="/register"> <Button className={style.joinBtn} type="primary">Join Now</Button></Link>
     <h5>Already have a profile? <Link to={'/login'}>LogIn from Here</Link></h5>
     </article>
     <div className={style.reading}>
         <a href="https://passportsymphony.com/ultimate-travel-bucket-list/">Bucket-list: Destinations you should go to before you die</a>
         <a href="https://passportsymphony.com/16-rookie-mistakes-all-travelers-do/">Rookie travel mistakes all travelers do</a>
         <a href="https://passportsymphony.com/travel-life-hacks/">Travel life hacks</a>
         <Footer />
     </div>
     </div>
  );
};

export default Home;
