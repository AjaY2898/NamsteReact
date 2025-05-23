import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    // const loudinaryImageId = resData.info.cloudinaryImageId;
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = resData?.info; 
    return (
      <div className="res-card">
        <img className="res-logo"
          alt="res-logo"
          src = {CDN_URL + cloudinaryImageId}>
        </img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    )

};

export default RestaurantCard;