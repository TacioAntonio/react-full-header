import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('<FullHeader />', module)
    .add('with title', () => (
        <FullHeader
            title="title"
        />
    ))
    .add('with title and subtitle', () => (
        <FullHeader
            title="title"
            subtitle="subtitle"
        />
    ))
    .add('with title, subtitle and bgColor', () => (
        <FullHeader
            title="title"
            subtitle="subtitle"
            bgColor="red"
        />
    ))
    .add('with title, subtitle, bgColor and textColor', () => (
        <FullHeader
            title="title"
            subtitle="subtitle"
            bgColor="red"
            textColor="blue"
        />
    ))
    .add('with title, subtitle, bgColor, textColor and font', () => (
        <FullHeader
            title="title"
            subtitle="subtitle"
            bgColor="red"
            textColor="blue"
            font="arial"
        />
    ))
    .add('with title, subtitle, and image', () => (
        <FullHeader
            title="React"
            subtitle="A component created with storybook"
            bgImg="https://d31v04zdn5vmni.cloudfront.net/blog/wp-content/uploads/2012/02/best-way-to-code-background-colors-for-html-email-690x362.png"
        />
    ))
    .add('with title, subtitle, and video', () => (
        <FullHeader
            title="title"
            subtitle="subtitle"
            video="#"
        />
    ))
