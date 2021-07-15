import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFour";
import About from "../../components/about/AboutFour";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Skills from "../../components/skills/SkillsTwo";
import Video from "../../components/video/VideoTwo";
import Brand from "../../components/Brand";
import Testimonial from "../../components/testimonial/TestimonialTwo";
import News from "../../components/news/NewsTwo";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";
import Reveal from "react-reveal/Reveal";
import Timeline from "../../components/Timeline/Timeline"

const HomeFour = () => {
  return (
    <div className="home-four">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

     {/* <Portfolio />
     End Portfolio Section */}

           <div className="shane_tm_section" id="education">
        <div className="shane_tm_partners">
          <div className="container">
          <div className="shane_tm_title">
            <span>Education</span>
          </div>
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>

      <Portfolio />
     {/*End Portfolio Section */}

      <Timeline />

      <Skills />
      {/* End Skills Section */}

     {/* <Video />
      End Video Section */}


      {/* End shane_tm_partners */}

      <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <Reveal effect="fadeInRight">
                <div className="left">
                  <div className="shane_tm_title">
                    <span>Testimonials</span>
                    <h3>What clients say about my portfolio template</h3>
                  </div>
                </div>
              </Reveal>
              <Reveal effect="fadeInRight">
                <div className="right">
                  <Testimonial />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      {/* End  shane_tm_testimonials*/}

      {/*<News /> End Blog Section */}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeFour;
