import React,{Component} from 'react';
import { pageview } from '../utils/googleAnalytics';

class Wrapper extends Component
{
    componentDidUpdate(prevProps)
    {
        if (this.props.location !== prevProps.location)
            window.scroll(0,0);

        pageview(this.props.location.pathname);
    }

    render()
    {
        return this.props.children;
    }
}

export default Wrapper;