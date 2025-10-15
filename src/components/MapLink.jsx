"use client"; // چون از window و navigator استفاده می‌کنیم

import React from "react";

const MapLink = ({ lat = 28.98669639134926, lng = 50.82755359796483}) => {
  const openMap = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      // iOS → Apple Maps
      window.location.href = `http://maps.apple.com/?ll=${lat},${lng}`;
    } else if (/android/i.test(userAgent)) {
      // Android → Google Maps
      window.location.href = `geo:${lat},${lng}?q=${lat},${lng}`;
    } else {
      // دسکتاپ → Google Maps
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, "_blank");
    }
  };

  return (
    <a
      onClick={openMap}
      
    >
      <img src='/assets/images/logo/whiteLocationIcon.svg'></img>
    </a>
  );
};

export default MapLink;
