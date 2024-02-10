import React, { forwardRef } from "react";
import "./customers.css";
import jeremy from "../../../src/assets/images/jeremy.jpg";
import family from "../../../src/assets/images/family.jpg";
import friends from "../../../src/assets/images/friends.jpg";

const Customers = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="customers-wrapper">
      <div>
        <div className="image-wrapper">
          <img src={jeremy} alt={jeremy}></img>
          <div><p>
          Cras eu lobortis quam. Nulla urna diam, rhoncus eu elementum eget, tempor quis lorem. Mauris vel consectetur ex, sed ornare tortor. Fusce vehicula nisi tortor, ut posuere quam dapibus quis. Aenean laoreet metus pulvinar ultrices euismod. Phasellus blandit dui velit, eu varius augue bibendum sed. Praesent aliquam massa ut pharetra molestie. Vivamus laoreet nec purus sit amet rhoncus. Sed vitae ex justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p></div>
        </div>
      </div>
      <div>
        <div className="image-wrapper">
          <img src={family} alt={family}></img>
          <div><p>
          Cras eu lobortis quam. Nulla urna diam, rhoncus eu elementum eget, tempor quis lorem. Mauris vel consectetur ex, sed ornare tortor. Fusce vehicula nisi tortor, ut posuere quam dapibus quis. Aenean laoreet metus pulvinar ultrices euismod. Phasellus blandit dui velit, eu varius augue bibendum sed. Praesent aliquam massa ut pharetra molestie. Vivamus laoreet nec purus sit amet rhoncus. Sed vitae ex justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p></div>
        </div>
      </div>
      <div>
        <div className="image-wrapper">
          <img src={friends} alt={friends}></img>
          <div><p>
          Cras eu lobortis quam. Nulla urna diam, rhoncus eu elementum eget, tempor quis lorem. Mauris vel consectetur ex, sed ornare tortor. Fusce vehicula nisi tortor, ut posuere quam dapibus quis. Aenean laoreet metus pulvinar ultrices euismod. Phasellus blandit dui velit, eu varius augue bibendum sed. Praesent aliquam massa ut pharetra molestie. Vivamus laoreet nec purus sit amet rhoncus. Sed vitae ex justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p></div>
        </div>
      </div>
    </div>
  );
});

export default Customers;
