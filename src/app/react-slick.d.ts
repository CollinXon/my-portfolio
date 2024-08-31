declare module 'react-slick' {
    import * as React from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      draggable?: boolean;
      adaptiveHeight?: boolean;
      [key: string]: any; // Allows additional settings
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  