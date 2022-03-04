import React from 'react';

const ReviewCard = ({userData}) => {
  return (
        <div className='reviewCardWrapper'>
            <div className="reviewCardShadow"></div>
            <div className='reviewCardData'>
                <div className="reviewCardUserDetails">
                    <img src={userData.pic} alt="" />
                    <div className="cardUserData">
                        <p className='cardUserName'>{userData.name}</p>
                        <p className="cardUserCountry">
                            <img src={userData.countryFlag} alt="" />
                            <span>{userData.country}</span>
                        </p>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eos eius, sunt eveniet illo inventore vel asperiores doloremque delectus dignissimos
                </p>
            </div>
        </div>
  );
};

export default ReviewCard;
