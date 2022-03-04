import React from 'react';
import save from '../../images/icons/postsave.png'

const ShowCard = ({userDetails}) => {
  return <div className='showCardContainer'>
            <div className='backShadow'></div>
            <div className='showCardDetails'>
                <img src={userDetails.img} alt=""/>
                <div className="cardDataDetails">
                    <div className='cardGenre'>{userDetails.genre}</div>
                    <h3 style={{fontFamily:'Libre baskerville'}}>{userDetails.name}</h3>
                    <div className="cardMoreInfo">
                        <p>
                            More Info
                            <i class="far fa-arrow-right"></i>
                        </p>
                        <img src={save} alt="" />
                    </div>
                </div>
            </div>
  </div>;
};

export default ShowCard;
