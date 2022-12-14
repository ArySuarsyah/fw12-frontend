import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import TicketStatus from './component/Ticket/TicketStatus';

export default class TicketResult extends Component {
    render() {
        return (
            <>
                <Header nav1="Home" nav2="List Movie"/>
                <TicketStatus
                    logo={require('../Assets/Image/tickitz1.png')}
                    movie='Spider-Man: Homecoming'
                    date='07 July'
                    time='02:00pm'
                    category='Action'
                    count='3 pieces'
                    seats='C4, C5, C6'
                    price='$30.00'
                    status={require('../Assets/Image/QR Code 1.png')}
                />
                <Footer />
            </>
        )
    }
}
