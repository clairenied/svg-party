import React, { Component } from 'react';
import axios from 'axios';

class Hotdogman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '0',
            height: '0',
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    getEyeball(containerSize) {
        const eyeballSize = containerSize / 10;
        const getRandomNumberWithinParameters = () => {
            return eyeballSize + (Math.floor((Math.random() * (containerSize - (2 * eyeballSize)))))
        };
        const cx = getRandomNumberWithinParameters();
        const cy = getRandomNumberWithinParameters();
        return {
            cx, 
            cy,
            shadowR: eyeballSize,
            eyeballR: eyeballSize / 1.25,
            pupilR: eyeballSize / 2,
        }
    }
    getHotdogmen(containerSize) {
        let hotdogmanArr = []
        for (let i = 0; i < this.state.width / 100; i++) {
            for (let j = 0; j < this.state.height / 100; j++) {
                hotdogmanArr.push(
                    <Tile key={`${i}${j}`}
                        containerSize={containerSize}
                        getEyeball={this.getEyeball}
                        x={containerSize * i}
                        y={containerSize * j} />
                );
            }
        }
        return hotdogmanArr;
    }
    render() {
        return (
            <svg>
                {this.getHotdogmen(150).map(hotdogman => hotdogman)}
            </svg>
        );
    }
}

const Tile = (props) => {
    return (
        <svg x={props.x} y={props.y}>
            <rect width={props.containerSize} height={props.containerSize} fill="#ccfcfc" />
             <circle cx={props.containerSize / 2} cy={props.containerSize / 2} r={props.containerSize / 3} fill="#b4e278" /> 
            <Eye { ...props.getEyeball(props.containerSize) } />
            <Eye { ...props.getEyeball(props.containerSize) } />
        </svg>
    );
};

const Eye = (props) => {
    return (
        <svg>
            <circle cx={props.cx} cy={props.cy} r={props.shadowR} fill="#f4f4f4" />
            <circle cx={props.cx} cy={props.cy} r={props.eyeballR} fill="#ffffff" />
            <circle cx={props.cx} cy={props.cy} r={props.pupilR} fill="#383a3a" />
        </svg>
    );
};

export default Hotdogman;