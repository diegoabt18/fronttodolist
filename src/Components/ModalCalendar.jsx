import React from 'react'
import ModalDatePicker from 'react-modal-datepicker';
import styled from "styled-components";

const ModalCalendar = ({ dateModal, setDateModal, setDate, setIsOpen }) => {
    
    const hideDatePicker = () => {
        setDateModal(false);
    };

    const handleConfirm = (date) => {
        setDate(date.toISOString().substring(0, 10));
        console.warn("A date has been picked: ", date.toISOString().substring(0, 10));
        hideDatePicker();
        setIsOpen(true);
    };

    return (
        <div className='z-99'>
            <CalendarContainer>
                <ModalDatePicker
                    isOpen={dateModal}
                    handleSelectDate={handleConfirm}
                    handleClosePicker={hideDatePicker}
                />
            </CalendarContainer>

        </div>
    )
}

export default ModalCalendar;

const CalendarContainer = styled.div`
  
.picker-background {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.88);
  }
  
  .picker-close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 3%;
    color: white;
    font-size: 22pt;
  }
  
  .picker-wrapper {
    font-family: Helvetica;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .picker-modal-wrapper {
    max-height: 400px;
    max-width: 600px;
    border-radius: 3px;
    padding: 0 2%;
    box-shadow: 0 0 10px rgb(123, 123, 123);
    width: 100%;
    height: 100%;
    background-color: white;
  }
  
  .picker-options {
    display: flex;
    flex-direction: row;
    height: 80%;
  }
  
  .picker-calendar {
    flex-grow: 2;
    margin: 1%;
    color: #22333E;
  }
  
  .picker-information-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 1%;
    padding: 1%;
    max-width: 200px;
  }
  
  .picker-selected-date {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
  
  .picker-date-information {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .picker-date-information-day {
    flex-grow: 1;
    text-align: center;
    font-size: 34px;
  }
  
  .picker-date-information-details {
    display: flex;
    flex-direction: column;
    font-weight: lighter;
    flex-grow: 1;
  }
  
  .picker-buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-grow: 1;
  }
  
  .picker-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
  }
  
  .picker-button {
    height: 30px;
    border-radius: 2px;
    border: 1px solid #ccc;
    color: black;
    background-color: white;
    text-align: center;
  }
  
  .picker-button:hover {
    background-color: #e6e6e6;
  }
  
  .picker-button:active, .picker-button:focus {
    outline: none;
  }
  
  .picker-calendar-header {
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: #22333E;
    color: white;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  
  .picker-calendar-controls, .picker-calendar-week-days {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  .picker-calendar-week-days {
    flex-grow: 1;
    justify-content: space-around;
    padding-bottom: 1%;
  }
  
  .picker-calendar-weeks-wrapper {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    height: 230px;
    padding: 2px;
  }
  
  .picker-calendar-weeks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 38px;
  }
  
  .picker-calendar-days, .picker-calendar-days-empty {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  
  .picker-calendar-days:hover {
    background-color: #e6e6e6;
  }
  
  .picker-calendar-header-prev, .picker-calendar-header-next {
    flex-grow: 1;
    text-align: center;
  }
  
  .picker-calendar-header-month {
    flex-grow: 2;
    text-align: center;
  }
  
  .today, .today:hover {
    background-color: #22333E;
    color: white;
  }
  
  .clickable {
    cursor: pointer;
  }
  
  hr {
    border-style: solid;
    color: #ddd;
  }
  
  /* xs */
  @media (max-width: 767px) {
    .picker-modal-wrapper {
      max-width: 300px;
    }
    .picker-buttons{
        display:none;
    }
    .picker-options{
        flex-direction: column;
    }
  }
  
  /* sm */
  @media (min-width: 768px) and (max-width: 991px) {
  }
  
  /* md */
  @media (min-width: 992px) {
  }
  
  /* lg */
  @media (min-width: 1200px) {
  }
  
  
`;