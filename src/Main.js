/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, containerStyle, titleStyle, subtitleStyle, videoStyle } from './Styles';

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg, video }) => {
    return (
        <header style={{ ...headerStyle,
                         backgroundColor: bgColor,
                         color: textColor,
                         fontFamily: font,
                         backgroundImage: `url(${bgImg})` }}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && <video style={videoStyle} autoPlay muted loop src={video} />}
        </header>
    );
};


FullHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

FullHeader.defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

export default FullHeader;
