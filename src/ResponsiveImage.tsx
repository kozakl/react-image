import * as React from 'react';
import * as style from './ResponsiveImage.pcss';
import classNames from '@kozakl/utils/classNames';
import {PureComponent} from 'react';
/**
 * @author kozakluke@gmail.com
 */
export default class ResponsiveImage extends PureComponent<Props, State>
{
    constructor(props:Props)
    {
        super(props);
        
        this.state = {
            thumb: props.thumb,
            loadedThumb: false
        };
    }
    
    onLoadThumb = ()=> {
        this.setState({loadedThumb: true});
    };
    
    static getDerivedStateFromProps(props:Props, state:State)
    {
        if (props.thumb === state.thumb)
            return null;
        return {
            thumb: props.thumb,
            loadedThumb: false
        };
    }
    
    render()
    {
        const responsiveImageClass = classNames(
            style.responsiveImage,
            this.props.className
        );
        return (
            <div className={responsiveImageClass}>
                <div style={{'paddingTop': `${this.props.ratio * 100}%`}}>
                    <img
                        className={style.image}
                        src={this.state.thumb}
                        onLoad={this.onLoadThumb}/>
                    {this.state.loadedThumb && 
                        <img
                            className={style.image}
                            srcSet={this.props.srcSet}
                            sizes={this.props.sizes}
                            src={this.props.src}/>}
                </div>
            </div>
        );
    }
}

interface Props {
    className?:string;
    ratio:number;
    thumb:string;
    srcSet:string;
    sizes?:string;
    src?:string;
}

interface State {
    thumb:string;
    loadedThumb:boolean;
}
