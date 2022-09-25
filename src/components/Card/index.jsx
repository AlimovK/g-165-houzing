import React from "react";
import noUser from "../../assets/imgs/no_user.jfif";
import {
  CardInfo,
  Container,
  Details,
  DetailsWrapper,
  Featured,
  ForSale,
  Icon,
  Img,
  OldPrice,
  Owner,
  PriceSection,
} from "./style";
import notAvailable from "../../assets/imgs/not_available.png";
export const Card = ({ info }) => {
  return (
    <Container>
      <Img src={info?.attachments[0]?.imgPath || notAvailable} />
      <Featured>Featured</Featured>
      <ForSale>For Sale</ForSale>
      <Owner src={info?.owner || noUser} />
      <CardInfo>
        <h2
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
          className="sub-title"
        >
          {info?.name || "New Apartment Nice Wiew"}
        </h2>
        <p
          className="small-description"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {info?.country && info?.country + ","}
          {info?.region && info?.region + ","} {info?.city && info?.city + ","}
          {info?.address}
        </p>
        <DetailsWrapper>
          <Details>
            <Icon.Bed />
            <p className="small-description">
              {info?.houseDetails?.beds || 0} Beds
            </p>
          </Details>
          <Details>
            <Icon.Bath />
            <p className="small-description">
              {info?.houseDetails?.bath || "0"} Bath
            </p>
          </Details>
          <Details>
            <Icon.Car />
            <p className="small-description">
              {info?.houseDetails?.garage || "0"} Garage
            </p>
          </Details>
          <Details>
            <Icon.Ruler />
            <p className="small-description">
              {info?.houseDetails?.area || "0 "} Sq Ft
            </p>
          </Details>
        </DetailsWrapper>
      </CardInfo>
      <PriceSection>
        <div>
          <OldPrice>${info?.price || "0"} /mo</OldPrice>
          <h2 className="sub-title">
            ${info?.salePrice || "0"}/mo
          </h2>
        </div>
        <div className="flex">
          <Icon.Zoom />
          <div className="like">
            <Icon.Like />
          </div>
        </div>
      </PriceSection>
    </Container>
  );
};
export default Card;
