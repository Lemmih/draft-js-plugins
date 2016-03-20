/* eslint-disable react/no-unknown-property */
import React, { Component } from 'react';
import Container from '../../shared/Container';
import AlternateContainer from '../../shared/AlternateContainer';
import Heading from '../../shared/Heading';
import SimpleEditor from '../../shared/SimpleEditor';
import styles from './styles.css';
import linkifyPlugin from 'draft-js-linkify-plugin';
import { Map } from 'immutable';

const pluginMap = new Map({
  linkify: linkifyPlugin(),
});
const Editor = SimpleEditor(pluginMap);

export default class App extends Component {

  // description what the plugin does

  // h2 "Simple Example"
  // an simple editor with hashtag plugin (can be copied from unicorn editor)
  // simple code example

  // h2 "Custom Styling"
  // an editor with hashtag plugin & custom styles (can be copied from unicorn editor)
  // custom styles code example

  // h2 "API"
  // a table explaining what is exported

  render() {
    return (
      <div>
        <AlternateContainer>
          <Heading level={ 2 }>Linkify</Heading>
          <div className={ styles.root }>Linkify</div>
        </AlternateContainer>
        <Container>
          <Heading level={ 2 }>Example</Heading>
          <Editor />
        </Container>
      </div>

    );
  }
}