import React, { Component } from 'react';
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import 'aos/dist/aos.css'
import './TextComponent.css';

export default Watch(
    class TextComponent extends React.Component {
      render() {
        return(
          <span>
            STUFF
          </span>
        )
      }
    }
  );