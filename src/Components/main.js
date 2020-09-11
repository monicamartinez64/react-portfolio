import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Project from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Project} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;