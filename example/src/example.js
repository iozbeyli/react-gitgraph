import React from 'react';
import ReactDOM from 'react-dom';
import GitGraph from '../../src/GitGraph';

ReactDOM.render(<GitGraph options={{
        template: "metro",
        reverseArrow: false,
        orientation: "horizontal",
        mode: "compact"}}    />,document.getElementById('app'));
