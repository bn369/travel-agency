import "antd/dist/reset.css";
import { DatePicker } from "antd";
import { useEffect, useRef, useState } from "react";
import "./form.css";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../helpers/CustomSelect";
import moment from "moment/moment";
import emailjs from '@emailjs/browser';

const apiKey = "5rZ3JXt2D3AkF8zD_";
emailjs.init(apiKey);

const { RangePicker } = DatePicker;


function Form({ setIsForm, setIsSuccess }) {
  const navigate = useNavigate();
  const [emailCheck, setEmailCheck] = useState(true)
  const [date, setDate] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const destinationRef = useRef();
  const preferencesRef = useRef();
  const [data, setData] = useState({
    name: "",
    email: "",
    destination: "",
    date: "",
    stars: "",
    car: "",
    allInclusive: "",
    preferences: "",
  });

  const [selectedStars, setSelectedStars] = useState("3");
  const [isCar, setIsCar] = useState(false);
  const [isAllInclusive, setIsAllInclusive] = useState(false);

  const handleSelectedStarsChange = (value) => {
    setSelectedStars(value);
  };

  const handleCarCheck = (event) => {
    setIsCar(event.target.checked)
  }

  const handleAllInclusiveCheck = (event) => {
    setIsAllInclusive(event.target.checked)
  }

  const handleDateChange = (values) => {
    if (values && values.length === 2) {
      const startDate = values[0];
      const endDate = values[1];
      const formattedStartDate = moment(startDate).format("MMMM Do YYYY");
      const formattedEndDate = moment(endDate).format("MMMM Do YYYY");

      setDate([formattedStartDate, formattedEndDate]);
    } else {
      setDate([]);
    }
  };

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  useEffect(() => {
    if (data.name && data.destination && data.email && data.preferences) {
      navigate("/success");
      setIsForm(false);
      setIsSuccess(true);
    }
  }, [data, setIsForm, setIsSuccess]);

  function submitHandler(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const destination = destinationRef.current.value;
    const preferences = preferencesRef.current.value;

    if (!isValidEmail(email)) {
      setEmailCheck(false);
      return;
    }

    setData({
      name: name,
      email: email,
      destination: destination,
      date: date,
      stars: selectedStars,
      car: isCar ? "yes" : "no",
      allInclusive: isAllInclusive ? "yes" : "no",
      preferences: preferences,
    });

    const updatedData = {
      ...data,
      date: date.join(" to "),
    };

    const updatedDataFormatted = JSON.stringify(updatedData);

    emailjs.send("service_jhweypj","template_qnh4slk", updatedDataFormatted, apiKey).then((response) => {
      console.log("email sent:", response)
    }).catch((error) => {
      console.error("Email error:", error);
    })

  }

  return (
    <div className="form-wrapper">
      <h2>Start Your Voyage </h2>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text" ref={nameRef} required />
        <label>Email</label>
        <span className={emailCheck ? "" : "warning"}>Not a valid email!</span>
        <input type="text" ref={emailRef} required />
        <label>Destination</label>
        <input type="text" ref={destinationRef} required />
        <RangePicker onChange={handleDateChange} />
        <div className="hotel">
          <p>Hotel</p>
          <CustomSelect selectedStars={selectedStars} onSelectedStarsChange={handleSelectedStarsChange}/>
        </div>
        <div className="check-box">
          <div>
            <label htmlFor="all-inclusive">all inclusive</label>
            <input
              type="checkbox"
              id="all-inclusive"
              name="all-inclusive"
              value="all-inclusive"
              checked={isAllInclusive}
              onChange={handleAllInclusiveCheck}
            />
          </div>
          <div>
            <label htmlFor="car">car</label>
            <input 
              type="checkbox" 
              id="car" 
              name="car" 
              value="car"
              checked={isCar}
              onChange={handleCarCheck} 
            />
          </div>
        </div>
        <label>Preferences</label>
        <textarea ref={preferencesRef}></textarea>
        <button onClick={submitHandler}>Make It Happen!</button>
      </form>
    </div>
  );
}

export default Form;
