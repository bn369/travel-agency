import React from "react";
import { StarFilled } from "@ant-design/icons";
import { Select } from "antd";
const { Option } = Select;
const starStyle = { color: "#FFD60A", fontSize: "20px" };

function CustomSelect({ selectedStars, onSelectedStarsChange }) {

  const handleStarChange = (value) => {
    onSelectedStarsChange(value);
  };

  return (
    <Select 
      value={selectedStars}
      onChange={handleStarChange}
      style={{ width: "160px" }}
    >
      <Option value="2">
        <span>
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
        </span>
      </Option>
      <Option value="3" selected>
        <span>
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
        </span>
      </Option>
      <Option value="4">
        <span>
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
        </span>
      </Option>
      <Option value="5">
        <span>
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
          <StarFilled style={starStyle} />
        </span>
      </Option>
    </Select>
  );
}

export default CustomSelect;