import React from "react";
import "./Home.css";
// import Counter from './Counter'
import Counter from "./Counter";
import TiltedCard from "./TiltedCard";
import master from "../assets/master.jpg";
import profile from "../assets/profile.jpg";
import profiletwo from "../assets/cat.jpg";
import profilethree from "../assets/woman.jpg";
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <div className="home-container">
        {/* Left Section */}
        <div className="home-content">
          <h1>
            WELCOME TO <br />
            <span>COMMUNION</span> APP !
          </h1>
          <p>
            Join us in fostering connections among diverse faiths. Together, we
            can create a supportive community through shared events
          </p>
          <div className="buttons">
            <button className="exbtn">Join Us</button>

            <button className="btncta">
              <span className="btnspan">NEXT</span>
              <span className="btnsecond">
                <svg
                  width="50px"
                  height="20px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      className="btnnone"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="btntwo"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      className="btnthree"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Section - Grid */}
        <div className="right-container">
          <div className="grid-container">
            <div className="grid-item item1"></div>
            <div className="grid-item item2">2</div>
            <div className="grid-item item3">3</div>
            <div className="grid-item item4">4</div>
          </div>
        </div>
      </div>

      {/* second */}

      <section className="section2">
        <div className="section2img"></div>
      </section>

      {/* third section */}

      <section className="section3">
        <div className="parent-container">
          <div className="leftbox">
            <h3>Uniting Diverse Communities Through Shared Experiences</h3>
          </div>
          <div className="rightbox">
            <p>
              Our app fosters connections among individuals of various faiths,
              promoting unity through events and community support. Join us in
              building a welcoming space for everyone.
            </p>
            <div className="bttn">
              <button className="twobutton">
                <span className="twotransition"></span>
                <span className="twogradient"></span>
                <span className="twolabel">Button</span>
              </button>
              <button className="exbtn">Join Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section id="#About" className="section4">
        <div className="container">
          <div className="content4">
            <h2>
              Helping You Connect, Learn, and <span>Thrive ✦ 2x </span> Impact
            </h2>
          </div>
          <div className="counter">
            <div className="counter-item">
              <h3>
                <Counter
                  from={0}
                  to={98}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                %
              </h3>
              <p className="counter-text">Opportunities Expanded</p>
            </div>

            <div className="counter-item">
              <h3>
                <Counter
                  from={0}
                  to={89}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                %
              </h3>
              <p className="counter-text">Attendee Satisfaction</p>
            </div>

            <div className="counter-item">
              <h3>
                <Counter
                  from={0}
                  to={15}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                K+
              </h3>
              <p className="counter-text">Engaged Participants</p>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}

      <section className="section5">
        <div className="section5-container">
          <div className="content5">
            <h2>Connecting People Across Faiths & Interests</h2>
            <p>
              Join a vibrant community that celebrates diversity and fosters
              connections. Discover events and support that unite people from
              all walks of life.
            </p>
            <div className="leftbtn5">
              <button className="button5"> Explore</button>
              <button className="button5">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}

      <section className="section6">
        <div className="parent-container6">
          <div className="leftbox6">
            <h2>Bridging Communities Through Shared Experiences</h2>
            <p>
              The Communion App fosters connections among individuals of diverse
              faiths. Join us in creating a supportive community through
              engaging events and shared interests.
            </p>
            <div className="leftbtn6">
              <button className="button5"> Explore</button>
              <button className="button5">Learn More</button>
            </div>
          </div>
          <div className="rightbox6">
            <TiltedCard
              imageSrc={master}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Bhupinder Singh"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Communion App</p>
              }
            />
          </div>
        </div>
      </section>

      {/* section 7 */}

      <section className="section7">
        <div className="parent-container7">
          <div className="heading7">
            <h2>Trusted by Over 1500+ Active <br />
            Global Users</h2>
            <p>Join a growing community of over 1500 users worldwide who trust us to <br /> connect, engage, and thrive together.</p>
          </div>

          <div className="flexcard">
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    {/* <svg stroke="#ffffff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z" />
                </g>
              </svg> */}
                    <div className="profile">
                      <img src={profile} alt="" />
                    </div>

                    <h3>Ankit</h3>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>
                  <div className="front-content">
                    <small className="badge">USA</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          Communion has transformed how I connect with my
                          community, fostering unity and understanding among
                          diverse faiths. The...
                        </p>
                        <svg
                          fillRule="nonzero"
                          height="15px"
                          width="15px"
                          viewBox="0,0,256,256"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            style={{ mixBlendMode: "normal" }}
                            textAnchor="none"
                            fontSize="none"
                            fontWeight="none"
                            fontFamily="none"
                            strokeDashoffset={0}
                            strokeDasharray
                            strokeMiterlimit={10}
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                            strokeWidth={1}
                            stroke="none"
                            fillRule="nonzero"
                            fill="#20c997"
                          >
                            <g transform="scale(8,8)">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    {/* <svg stroke="#ffffff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z" />
                </g>
              </svg> */}
                    <div className="profile">
                      <img src={profiletwo} alt="" />
                    </div>

                    <h3>Rohan Misra</h3>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>
                  <div className="front-content">
                    <small className="badge">India</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          Being part of Communion is life-changing, blending
                          innovation with spirituality to create a truly
                          inclusive space. The events and discussions have
                          deepened my...
                        </p>
                        <svg
                          fillRule="nonzero"
                          height="15px"
                          width="15px"
                          viewBox="0,0,256,256"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            style={{ mixBlendMode: "normal" }}
                            textAnchor="none"
                            fontSize="none"
                            fontWeight="none"
                            fontFamily="none"
                            strokeDashoffset={0}
                            strokeDasharray
                            strokeMiterlimit={10}
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                            strokeWidth={1}
                            stroke="none"
                            fillRule="nonzero"
                            fill="#20c997"
                          >
                            <g transform="scale(8,8)">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    {/* <svg stroke="#ffffff" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#ffffff">
                <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z M 17 16C19.761719 16 22 18.238281 22 21C22 23.761719 19.761719 26 17 26C15.140625 26 13.550781 24.972656 12.6875 23.46875L15.6875 16.1875C16.101563 16.074219 16.550781 16 17 16 Z M 31 22C32.65625 22 34 23.34375 34 25C34 25.917969 33.585938 26.730469 32.9375 27.28125L32.90625 27.28125C33.570313 27.996094 34 28.949219 34 30C34 32.210938 32.210938 34 30 34C27.789063 34 26 32.210938 26 30C26 28.359375 26.996094 26.960938 28.40625 26.34375L28.3125 26.3125C28.117188 25.917969 28 25.472656 28 25C28 23.34375 29.34375 22 31 22 Z M 21 32C23.210938 32 25 33.789063 25 36C25 36.855469 24.710938 37.660156 24.25 38.3125L20.3125 39.9375C18.429688 39.609375 17 37.976563 17 36C17 33.789063 18.789063 32 21 32 Z M 9 34C10.65625 34 12 35.34375 12 37C12 38.65625 10.65625 40 9 40C7.902344 40 6.960938 39.414063 6.4375 38.53125L8.25 34.09375C8.488281 34.03125 8.742188 34 9 34Z" />
                </g>
              </svg> */}
                    <div className="profile">
                      <img src={profilethree} alt="" />
                    </div>

                    <h3>Amira</h3>
                  </div>
                </div>
                <div className="front">
                  <div className="img">
                    <div className="circle"></div>
                    <div className="circle" id="right"></div>
                    <div className="circle" id="bottom"></div>
                  </div>
                  <div className="front-content">
                    <small className="badge">UAE</small>
                    <div className="description">
                      <div className="title">
                        <p className="title">
                          Through Communion, I've joined events and discussions
                          that broadened my perspective and connected me
                          globally. The platform's interfaith dialogue...
                        </p>
                        <svg
                          fillRule="nonzero"
                          height="15px"
                          width="15px"
                          viewBox="0,0,256,256"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            style={{ mixBlendMode: "normal" }}
                            textAnchor="none"
                            fontSize="none"
                            fontWeight="none"
                            fontFamily="none"
                            strokeDashoffset={0}
                            strokeDasharray
                            strokeMiterlimit={10}
                            strokeLinejoin="miter"
                            strokeLinecap="butt"
                            strokeWidth={1}
                            stroke="none"
                            fillRule="nonzero"
                            fill="#20c997"
                          >
                            <g transform="scale(8,8)">
                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <p className="card-footer">
                        30 Mins &nbsp; | &nbsp; 1 Serving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default Home;
