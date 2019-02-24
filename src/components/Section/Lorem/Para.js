import React from "react";

const Para = ({ par }) => {
  return (
    <React.Fragment>
      {par.map((non, index) => (
        <p key={index} style={{margin: '10px'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aspernatur rerum soluta ex, quod harum, mollitia corporis dicta
          exercitationem dignissimos ducimus qui nam porro provident aut dolor
          fugit dolorum? Eligendi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aspernatur rerum soluta ex, quod harum, mollitia corporis dicta
          exercitationem dignissimos ducimus qui nam porro provident aut dolor
          fugit dolorum? Eligendi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          aspernatur rerum soluta ex, quod harum, mollitia corporis dicta
          exercitationem dignissimos ducimus qui nam porro provident aut dolor
          fugit dolorum? Eligendi!
        </p>
      ))}
    </React.Fragment>
  );
};

export default Para;
