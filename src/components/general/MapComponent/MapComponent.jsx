import React, { Component } from "react";
import { longdo, map, LongdoMap } from "./LongdoMap/LongdoMap";

class MapComponent extends Component {
  state = { map_obj: null };
  initMap() {
    map.Layers.setBase(longdo.Layers.GRAY);
  }

  render() {
    const location_list = this.props.all_location_list;
    // console.log(location_list);
    for (let e_loc of location_list) {
      const lat = e_loc.location_lat;
      const lon = e_loc.location_long;
      const dot = new longdo.Dot(
        {
          lat: lat,
          lon: lon,
        },
        {
          lineWidth: 15,
          draggable: false,
        }
      );
      map.Overlays.add(dot);
    }

    const mapKey = "4b0bbb9505ee40b821fe9c0046917e4f";
    return (
      <div
        style={{
          height: 480,
          border: "1px solid darkgrey",
          position: "relative",
          marginBottom: 15,
        }}
      >
        <LongdoMap id="longdo-map" mapKey={mapKey} callback={this.initMap} />
      </div>
    );
  }
}

export default MapComponent;
