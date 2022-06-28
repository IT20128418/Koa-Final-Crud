import React from 'react';
import {render} from 'react-dom';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('app'));

render(
    <h3>Hello World</h3>
)