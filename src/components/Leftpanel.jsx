import React from "react";
import { useSelector } from "react-redux";
import "../style.scss";

export default function Leftpanel() {
  const user = useSelector((state) => state.users.userInfo);
  return (
    <div className="left-panel">
      <div className="left-panel__header">Информация о пациенте</div>
      <div className="left-panel__body">
        <div className="pacient-data">
          <div className="pacient-data__name">
            <span>ФИО</span>
            <span>{user.firstName ? user.firstName : <></>}</span>
          </div>
          <div className="pacient-data__age">
            <span>Возраст</span>
            <span>{user.birthDate ? user.birthDate : <></>}</span>
          </div>
          <div className="pacient-data__diagnosis">
            <span>Диагноз</span>
            <span>{user.diagnosis ? user.diagnosis : <></>}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
