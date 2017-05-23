import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import AppBarMyAccount from '../src';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const AppBarMyAccountExample = require('raw!../src/AppBarMyAccount.example');

const Index = () => (
  <div className="component-documentation">
    <Playground codeText={AppBarMyAccountExample} scope={{ React, AppBarMyAccount }} />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('root'));

if (__ONBUILD_REACT_PERF__) {
  window.Perf = require('react-addons-perf');
}
