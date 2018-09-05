import * as React from 'react';
import * as style from './ResponsiveImage.pcss';
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
    
    onLoadThumb = ()=>
    {
        if (this.props.onLoadThumb)
            this.props.onLoadThumb();
        
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
        return (
            <div className={this.props.className}>
                <div className={style.wrapper}
                     style={{'paddingTop': `${this.props.ratio * 100}%`}}>
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
    onLoadThumb?:()=> void;
}

interface State {
    thumb:string;
    loadedThumb:boolean;
}
