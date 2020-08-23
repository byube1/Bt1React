import React, { Component } from 'react';
import Header from '../Header';
import Slider from '../Slider';
import ProductList from '../ProducList';
import Footer from '../Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Slider />
                <ProductList />
                <Footer />
            </div>
        );
    }
}
export default Home;