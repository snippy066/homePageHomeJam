import React from 'react';
import ReviewCard from './allReviewCard';
import us from '../../images/icons/usFlag.png'
import IT from '../../images/icons/flag.png'
import Img1 from '../../images/img8.png';
import Img2 from '../../images/imag7.png';
import Img3 from '../../images/Img2.png';

const userData = [
    {
        pic:Img1,
        name:"Hellen Jummy",
        country:'Palo Alto, CA',
        countryFlag:us
    },
    {
        pic:Img2,
        name:'Isaac Oluwatemilorun',
        country:'Metropolitan City of Milan',
        countryFlag:IT
    },
    {
        pic:Img3,
        name:'Hellen Jummy',
        country:'Palo Alto, CA',
        countryFlag:us
    }
]


const UserReview = () => {
  return (
    <div className='userReviewWrapper'>
        <div className="userReviewHeading">
            <h3>Review</h3>
            <div className="navigator">
                <span>1 <span style={{color:'gray',marginLeft:'0'}}>/12</span></span>
                <span >
                    <i className="far fa-arrow-left"></i>
                </span>
                <span>
                    <i className="far fa-arrow-right"></i>
                </span>
            </div>
        </div>
        <hr className='upcomingShowHr'/>
        <div className="reviewCardContainer">
            <ReviewCard userData={userData[0]}/>
            <ReviewCard userData={userData[1]}/>
            <ReviewCard userData={userData[2]}/>
        </div>
    </div>
    );
};

export default UserReview;
