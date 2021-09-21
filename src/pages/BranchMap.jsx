
import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Button from '@material-ui/core/Button';
import { AccordionFAQs } from '../cmps/Accordion';
import { MainLayout } from '../cmps/layout/MainLayout';

export class _BranchMap extends React.Component {
    state = {
        center: {
            lat: 32.109333,
            lng: 34.855499
        }
    }

    changeCenter = (center) => {
        this.setState({ center: { lat: center.lat, lng: center.lng } })
    }

    containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%'
    }
    render() {
        return (
            <MainLayout>
                <div className="map-container">

                    <Map google={this.props.google}
                        style={{
                            width: '100%', height: '70vh', position: 'relative'
                        }}
                        containerStyle={this.containerStyle}
                        initialCenter={this.state.center}
                        center={
                            this.state.center
                        }
                        zoom={13}>
                        <Marker
                            title={'Tel Aviv'}
                            name={'Tel Aviv'}
                            position={{ lat: 32.076532115992784, lng: 34.780556401482 }} />
                        <Marker
                            title={'Hadera'}
                            name={'Hadera'}
                            position={{ lat: 32.42962406784195, lng: 34.92192889615041 }} />
                        <Marker
                            title={'Bat Yam'}
                            name={'Bat Yam'}
                            position={{ lat: 32.01186717636824, lng: 34.74877601302463 }} />



                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>hi</h1>
                            </div>

                        </InfoWindow>
                    </Map>
                    <div className='btn-nav-map'>
                        <Button  onClick={() => { this.changeCenter({ lat: 32.076532115992784, lng: 34.780556401482 }) }} variant="outlined" color="primary">Tel Aviv</Button>
                        <Button  onClick={() => { this.changeCenter({ lat: 32.42962406784195, lng: 34.92192889615041 }) }} variant="outlined" color="primary">Hadera</Button>
                        <Button  onClick={() => { this.changeCenter({ lat: 32.01186717636824, lng: 34.74877601302463 }) }} variant="outlined" color="primary">Bat Yam</Button>
                    </div>
                    <div>
                        <AccordionFAQs />
                    </div>
                </div>
            </MainLayout>
        );
    }
}

export const BranchMap = GoogleApiWrapper({
    apiKey: ('AIzaSyDU7dioNfhFTADeUY7K0oPN80S90jOUBpI')
})(_BranchMap)
