import React, { Component } from 'react'
import Header from './component/Header'
import FormMovie from './component/ManageMovie/FormMovie'

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
