import React from 'react';
import SVG, {Path, Circle} from 'react-native-svg';

const SucessCheck = () => {
  return (
    <SVG
      width="114"
      height="114"
      viewBox="0 0 114 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Circle cx="57" cy="57" r="57" fill="white" fill-opacity="0.25" />
      <Circle cx="57" cy="57" r="43" fill="white" />
      <Path
        d="M49.775 73.9292C49.35 73.9292 48.9368 73.8465 48.5354 73.6813C48.134 73.516 47.7681 73.2681 47.4375 72.9375L34.6167 60.1167C33.9556 59.4556 33.625 58.6528 33.625 57.7083C33.625 56.7639 33.9556 55.9611 34.6167 55.3C35.2778 54.6389 36.0688 54.3083 36.9896 54.3083C37.9104 54.3083 38.725 54.6389 39.4333 55.3L49.775 65.6417L74.5667 40.9208C75.2278 40.2597 76.0188 39.9174 76.9396 39.8938C77.8604 39.8701 78.6514 40.2125 79.3125 40.9208C79.9736 41.5819 80.3042 42.3847 80.3042 43.3292C80.3042 44.2736 79.9736 45.0764 79.3125 45.7375L52.1125 72.9375C51.7819 73.2681 51.416 73.516 51.0146 73.6813C50.6132 73.8465 50.2 73.9292 49.775 73.9292Z"
        fill="#188748"
      />
    </SVG>
  );
};

export default SucessCheck;