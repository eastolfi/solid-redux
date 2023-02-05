import type { Component } from 'solid-js';

import { AppProvider } from './context/app.context';

import Parser from './components/parser';
import Pruebas from './components/pruebas';
import TimeSelector from './components/time-selector';

const App: Component = () => {
    return (
        <AppProvider>
            <TimeSelector />
            <Parser />
            <br />
            <br />
            <br />
            <Pruebas />
        </AppProvider>
    );
};

export default App;
