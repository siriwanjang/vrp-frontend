import React, { Component } from "react";
import { longdo, map, LongdoMap } from "./LongdoMap/LongdoMap";

class MapComponent extends Component {
  state = { map_obj: null };
  initMap() {
    map.Layers.setBase(longdo.Layers.GRAY);
  }

  componentDidUpdate() {
    map.Overlays.clear();
    const location_list = this.props.all_location_list;
    // console.log(location_list);
    // if (location_list.length < 1) {
    // }
    if (Array.isArray(location_list) === true) {
      for (let e_order of location_list) {
        console.log(e_order);
        if (e_order.is_show === true) {
          const lat_long_arr = [];
          for (let e_loc of e_order.location_list) {
            // console.log(e_loc);
            lat_long_arr.push({
              lon: e_loc.location.location_long,
              lat: e_loc.location.location_lat,
            });
          }
          console.log(lat_long_arr);
          const polyline = new longdo.Polyline(lat_long_arr, {
            title: "Polyline",
            detail: "-",
            // label: e_order.order_id,
            lineWidth: 4,
            lineColor: e_order.color, //"rgba(255, 0, 0, 0.8)",
          });
          for (let e_latlon of lat_long_arr) {
            const lat = e_latlon.lat;
            const lon = e_latlon.lon;
            const dot = new longdo.Dot(
              {
                lat: lat,
                lon: lon,
              },
              {
                lineWidth: 15,
                draggable: false,
                lineColor: e_order.color,
              }
            );
            map.Overlays.add(dot);
          }

          map.Overlays.add(polyline);
        }
      }
      // const listOverlays = map.Overlays.list();
      // console.log(listOverlays);
    }
  }

  render() {
    // }

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
