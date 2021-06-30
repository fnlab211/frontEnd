import React from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Section customNum={130}/>
            <Footer />
        </div>
    );
};

export default App;