import React from 'react'
import Layout from "../components/layout";
import Timer from "../components/timer"
import Particles from 'react-particles-js';
import { ReactComponent as Logo } from '../images/bildnw-logo.png';
import logo from '../images/bildnw-logo.png';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class IndexPage extends React.Component {
  state={
    email: ''
  }
  handleV = (e) => {
    this.setState({ email: e.target.value })
  }
  render() {
    return(
      <Layout>
        <div className="bgimg">
          <div className="bg-layout">
          <Particles className="particles" params={particlesOptions} />
            <div className="mytop">
              <img src={logo} width="350" />
            </div>
            <div className="middle">
              <div className="content">
                <h1 className="h1">COMING SOON.</h1>
                <Timer date="03/01/2022" time="19:00"/>
                <div id="mc_embed_signup">
              </div>
                <div className="btn-group">
                  {/*Email*/}
                  <a href="mailto:rahat@bildnw.com" className="button-social"><svg style={{width:24, height:24}} viewBox="0 0 24 24">
                    <path fill="#FFF" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg></a>
                </div>
              </div>
            </div>
            <div className="bottomleft">
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
