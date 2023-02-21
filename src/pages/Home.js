import React from "react";
import VendorCardTiles from "../components/VendorCardTiles";
import SwimLane from "../components/SwimLane";

export function Home() {
    return (
        <div className="App">            
            <SwimLane></SwimLane>
            <br/>
            <VendorCardTiles></VendorCardTiles>
        </div>
    );
}