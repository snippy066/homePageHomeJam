import React from 'react';
import ShowCard from './cards';
import img1 from '../../images/img5.png';
import img2 from '../../images/img4.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img.png';

const userDetails = [
    {
        img:img1,
        name:"Bennyl Dayal",
        genre:"Folk"
    },
    {
        img:img2,
        name:"Vijay Yesudas",
        genre:"Bollywood"
    },
    {
        img:img3,
        name:"Andrea Jeremiah",
        genre:"Folk"
    },
    {
        img:img4,
        name:"Shilpa Rao",
        genre:"Folk"
    }
]

const UpcomingShow = () => {
  return (
        <div className='upcomingShowWrapper'>
            <div className="upcomingShowHeader">
                <h1>Upcoming Show</h1>
                <p>View All</p>
            </div>
            <hr className='upcomingShowHr'/>
            
            <div className="showContactFlex">
                <ShowCard userDetails={userDetails[0]}/>
                <ShowCard userDetails={userDetails[1]}/>
                <ShowCard userDetails={userDetails[2]}/>
                <ShowCard userDetails={userDetails[3]}/>
            </div>
        </div>
    )
};

export default UpcomingShow;
