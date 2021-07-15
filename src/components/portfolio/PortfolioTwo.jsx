import React ,{ Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Reveal from "react-reveal/Reveal";
import { FaHtml5, FaReact, FaShopify}from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import Collapsible from 'react-collapsible';

const PortfolioTwo = () => {
  return (
    <div className="shane_tm_section" id="portfolio">
      <SimpleReactLightbox>
        <div className="shane_tm_portfolio">
          <div className="container">
            <div className="positon-relative">
              <div className="shane_tm_title">
                <div className="title_flex">
                  <div className="left">
                    <span>Portfolio</span>
                    <h3>Creative Portfolio</h3>
                  </div>
                </div>
              </div>
              {/* End shane_tm_title */}
              <div className="portfolio_filter">
                <Tabs>
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>Web</Tab>
                    <Tab>Branding</Tab>
                    <Tab>Photography</Tab>
                  </TabList>
                  {/* End tablist */}
                  <div className="portfolio_list">
                    <SRLWrapper>
                      <TabPanel>
    
      <ul alt="Web"><li>HTML</li><li>JavaScript</li><li>Liquid</li><li>ReactJS</li><li>CSS</li>
      <li>JSON</li><li>REST API</li><li>XML</li></ul>
                      </TabPanel>
                      {/* END ALL PORTFOLIO GALLERY */}

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/13.jpg">
                                  <img
                                    src="/img/portfolio/13.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/14.jpg">
                                  <img
                                    src="/img/portfolio/14.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}
                        </ul>
                        {/* End portfolio list */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/24.jpg">
                                  <img
                                    src="/img/portfolio/24.jpg"
                                    alt="Design"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Fruit</h3>
                                <span>Design</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/15.jpg">
                                  <img
                                    src="/img/portfolio/15.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Good Present</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>

                      <TabPanel>
                        <ul className="gallery_zoom">
                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/11.jpg">
                                  <img
                                    src="/img/portfolio/11.jpg"
                                    alt="Branding"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Blue Lemon</h3>
                                <span>Branding</span>
                              </div>
                            </div>
                          </li>
                          {/* End single image block */}

                          <li>
                            <div className="inner">
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <a href="/img/portfolio/16.jpg">
                                  <img
                                    src="/img/portfolio/16.jpg"
                                    alt="Photography"
                                  />
                                </a>
                              </div>
                              <div className="mobile_title">
                                <h3>Sweet Cherry</h3>
                                <span>Photography</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* End single image block */}
                      </TabPanel>
                    </SRLWrapper>
                    {/* End tabpanel */}
                  </div>
                  {/* End list wrapper */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SimpleReactLightbox>
    </div>
  );
};

export default PortfolioTwo;
