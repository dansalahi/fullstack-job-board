
import React from 'react'
import _ from 'lodash'
import ListingHeader from './listingHeader'
import ListingTable from './listingTable'
import { Container } from '@material-ui/core';
import './listings.css'

export interface ListingProps {

}

export interface ListingState {

}

class Listing extends React.Component<ListingProps, ListingState> {
    // state = { : }

    render() {

        return (
            <Container className="root">
                <ListingHeader />
                <ListingTable />
            </Container>
        );
    }

}

export default Listing;