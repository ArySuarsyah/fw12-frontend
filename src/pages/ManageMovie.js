import React, { Component } from 'react'
import Header from './components/Header'
import FormMovie from './components/ManageMovie/FormMovie'

export default class ManageMovie extends Component {
    render() {
        return (
            <>
                <Header nav1="Dashboard" nav2="Manage Movie" nav3="Manage Schedule" />
                <FormMovie />
            </>
        )
    }
}
