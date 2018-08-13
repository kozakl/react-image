import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Content from './components/content';
import './Main.pcss';
/**
 * @author kozakluke@gmail.com
 */
class Main
{
    constructor()
    {
        ReactDOM.render(
            <Content/>,
            document.getElementById('main')
        );
    }
}

new Main();
