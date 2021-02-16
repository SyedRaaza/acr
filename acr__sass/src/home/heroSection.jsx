import React,{useState , useEffect} from 'react';
import heroImg from "./images/heroImage.jpg";
import axiosConfig from "../axiosConfig/axiosConfig";
import baseURLget from '../axiosConfig/axiosConfig';
import { getUsers } from '../app/store/redux';
import axios from 'axios';
import baseURL from '../axiosConfig/axiosConfig';

function HeroSection(props) {
    const [response , setRespone] = useState();
    useEffect(() => {
        axiosConfig.get('/users')
        .then (res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        });
        console.log(`Axios ${baseURLget}`)
    },[]);
console.log(baseURL);
const getUsers = () => {
    axios.get("/users" , {baseURL:"https://jsonplaceholder.typicode.com"})
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}

    return (
        <React.Fragment>
            <div className="heroSection">
                <div className="heroSection--left">
                    <p>Welcome to ACR <small>Management Tool</small>.</p>
                    <p>Serving thousands of companies around the world, eramba is a popular open Governance, Risk and Compliance (GRC) solution</p>
                    <p>Latest Enterprise Release - January 21, 2021<br/>Latest Community Release - October 21, 2019</p>
                </div>
                <div className="heroSection--right">
                    <div className="heroSection--right__image">
                        <img src={heroImg} alt=""/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HeroSection;