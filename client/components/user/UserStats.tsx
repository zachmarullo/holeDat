import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FeedEntry from '../feed/FeedEntry';


export const UserStats = ({ userId }) => {

    type phImg = {
        image_id: number;
        photoURL: string;
        caption: string;
        createdAt: string;
        updatedAt: string;
        pothole_id: number;
    };

    const [uploadedPotholes, setUploadedPotholes] = useState<phImg[]>([]);

    const getUserPotholes = () => {
        console.log(userId);
        axios.get('/api/imgs/atUser' + 6)
            .then(data => {
                setUploadedPotholes(data.data)
            })
            .catch(err => console.log(err));

    }

    useEffect(getUserPotholes, [])

    return (
        <div>
            <h1>Uploaded Pothole Images</h1>
            {uploadedPotholes.map(imgVal => <FeedEntry key={imgVal.image_id} imgObj={imgVal} />)}
        </div>
    )
}