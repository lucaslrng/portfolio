import JS from "../assets/img/JS.svg";
import React from "../assets/img/react.svg";
import PHP from "../assets/img/php.svg";
import SQL from "../assets/img/sql.png";
import laravel from "../assets/img/laravel.png";
import symfony from "../assets/img/symfony.svg";
import bootstrap from "../assets/img/bootstrap.svg";

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const MySkills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-box">
                        <h2>Compétences</h2>
                        <p>Voici les technologies que j'ai utilisés lors de ma formation.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={JS} alt="Image" />
                                <h5>JS</h5>
                            </div>
                            <div className="item">
                                <img src={React} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={PHP} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={SQL} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={symfony} alt="Image" />
                                <h5>Symfony</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}