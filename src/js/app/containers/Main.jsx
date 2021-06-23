import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

import Wrapper from './Wrapper.jsx';
import APN from './APN/Post.jsx';
import B2B from './B2B/Post.jsx';
import Reconhecimento from './Reconhecimento/Post.jsx';
import ReconhecimentoMaravilha from './ReconhecimentoMaravilha/Post.jsx';
import Biogenica from './Biogenica/Post.jsx';
import Banner from './Banner/Post.jsx';

class Main extends Component
{
    render()
    {
        return(
            <Wrapper>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Biogenica} />
                        <Route exact path='/apn' component={APN} />
                        <Route exact path='/reconhecimento' component={Biogenica} />
                        <Route component={Biogenica} />
                    </Switch>
                </Router>
            </Wrapper>
        )
    }
}

export default Main;