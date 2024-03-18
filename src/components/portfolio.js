import React from 'react';
import addressCapture1 from "../assets/address capture 2.png";
import addressCapture2 from "../assets/address capture.png";
import timetableplannerimg from "../assets/timetable-planner.png";

const Skills = () => {
    return (
        <div className="container mt-5">
            <h2>Recent NetSuite Projects</h2>
            <ul>
                <li>NetSuite SuiteScript development (Address Capture)
                <img
                    className=""
                    src={addressCapture2}
                    alt=""
                    style={{ width: "100%" }}
                  />

                <img
                    className=""
                    src={addressCapture1}
                    alt=""
                    style={{ width: "100%" }}
                  />
                   
                    <p></p>
                </li>
                <li>NetSuite Customization Search page
                    <p>In this process, my task was to create a suitelet page that can be used by any user to search for existing NetSutie customization based on a keyword or field ID. After search was completed user should be able to download a csv file.
                       I developed this project using Suitelet + Map Reduce and custom record to tract the search keyword and file. 
                       This search can also be used to find any hardcoded emails used in script.
                    </p>
                </li>
                <li>Extract Transaction Data using SuiteQL - In this project I created few SQL queries to extract NetSuite transaction data using REST Webservices and SuiteQL</li>
            </ul>
            <h2>Recent PHP Projects</h2>
            <ul><li>
                <p>
                    Time Table Planner:
                    <img
                    className=""
                    src={timetableplannerimg}
                    alt=""
                    style={{ width: "100%" }}
                  />
                  Link: https://einsty.com/tools/app/study-timetable-planner.html
                </p>
                </li></ul>
        </div>
    );
}

export default Skills;
