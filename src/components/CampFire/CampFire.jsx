/* eslint-disable no-dupe-keys */

import "./CampFire.css";
import { useCampFire } from "./CampFireLogic";

const CampFire = () => {
    useCampFire();

    return (
        <div className="absolute h-full w-full ">
            <div className="cf-container top-1/2  left-1/2  md:left-[5%] lg:left-[20%] -translate-x-1/2 md:translate-x-0 -translate-y-1/2 ">
                <div className="cf-flame-container" id="fireNodes1">
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                </div>
                <div className="cf-flame-container" id="fireNodes2">
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                </div>
                <div className="cf-flame-container" id="base-fire">
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                    <div className="cf-flame"></div>
                </div>
                <div className="cf-log-container">
                    <div className="cf-log"></div>
                    <div className="cf-log"></div>
                </div>
            </div>
        </div>
    );
};

export default CampFire;
