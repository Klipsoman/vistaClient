import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { lookUserInfo } from "../redux/userReducer";

export default function PacientList({
  firstName,
  lastName,
  patrName,
  bedNumber,
  index,
  birthDate,
  diagnosis,
  historyNumber,
}) {
  const dispatch = useDispatch();
  const activeList = useSelector((state) => state.users.activeList);
  function getUser() {
    dispatch(
      lookUserInfo({
        firstName,
        lastName,
        patrName,
        birthDate,
        diagnosis,
        historyNumber,
      })
    );
  }

  return (
    <div className="pacient-table__item" onClick={getUser}>
      <div className="pacient-table__personal-number">{index + 1}</div>
      <div className="pacient-table__personal-name">
        {firstName + " " + lastName}
      </div>
      <div className="pacient-table__personal-bedNumber">
        {activeList === "present" ? bedNumber : patrName}
      </div>
    </div>
  );
}
