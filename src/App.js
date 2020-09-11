import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">My Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">My Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main>

          </Main>
        </Content>
    <Footer size="mini">
    <FooterSection type="left" logo="Title">
        <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy Terms</a>
        </FooterLinkList>
    </FooterSection>
    </Footer>
    </Layout>
       
</div>
  );
}

export default App;
