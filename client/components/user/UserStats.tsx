import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const UserStats = ({ userId }: { userId: number }) => {
    type phImg = {
        // type of the pothole images
        image_id: number;
        photoURL: string;
        caption: string;
        createdAt: string;
        updatedAt: string;
        pothole_id: number;
    };

    const [uploadedPotholes, setUploadedPotholes] = useState<phImg[]>([]);

    const getUserPotholes = () => {
        if (userId === -1) {
            // if the userId is -1 it is the logged in user profile
            axios
                .get('/api/user/current') // get the logged in user data
                .then((data) => {
                    axios
                        .get('/api/imgs/atUser' + data.data.user_id) // get all uploaded images from the logged in user
                        .then((data) => {
                            setUploadedPotholes(data.data); // set the uploadedPotholes array to the uploaded imagges of the logged in user
                        })
                        .catch((err) => console.log(err)); // if err then error
                })
                .catch((err) => console.log(err)); // if cant gget logged in user data err
        } else {
            // if the userId is not -1 we are in a nonUserProfile page
            axios
                .get('/api/imgs/atUser' + userId) // get all uploaded images of the user at userId
                .then((data) => {
                    setUploadedPotholes(data.data); // set the uploadedPotholes array to the uploaded images of the user at the userId
                })
                .catch((err) => console.log(err));
        }
    };

    useEffect(getUserPotholes, []);

    return (
        <div id='pothole-slider-content'>
            <h2>Images Uploaded:</h2>
            <div className='image-grid'>
                {uploadedPotholes.map((image) => {
                    return (
                        <Link key={image.image_id} className='slider-content' to={`/Pothole:${image.pothole_id}`}>
                            <div className='slider-img'>
                                <img className='pothole-image' alt='pothole Image' src={image.photoURL} />
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
