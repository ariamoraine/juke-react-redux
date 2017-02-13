import React from 'react';
import {connect} from 'react-redux';

import Stations from '../components/Stations';

const stationify = function (songArray) {
    const stations = {};
    songArray.forEach(song => {
        const genre = song.genre;
        stations[genre] = stations[genre] || [];
        stations[genre].push(song);
    });
    return stations;
}

const mapStateToProps = function (state) {
    return {
        stations: stationify(state.songs)
    };
};

const mapDispatchToProps = function (dispatch) {
    return {};
}

const StationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Stations);

export default StationsContainer;