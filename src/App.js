import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';


function App() {
  return (
    <div>
    <Layout style={{background: 'url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center / cover'}}>
        <Header transparent title="Portfolio" style={{color: 'white'}}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">My Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">My Projects</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Drawer>
        <Content style={{color: 'white'}}>
          <div style={{margin: '20px'}} className="page-content" />
          <Main>

          </Main>
        </Content>
    <Footer size="mini">
    <FooterSection type="left" logo="Contact Me">
        <FooterLinkList>
            <a href="https://github.com/monicamartinez64" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/monicamj/" target="_blank"><FaLinkedin /></a>
            <a href="mailto:monicamartinezmj@gmail.com" target="_blank"><FaEnvelope /></a>
        </FooterLinkList>
    </FooterSection>
    </Footer>
    </Layout>
       
</div>
  );
}

export default App;
