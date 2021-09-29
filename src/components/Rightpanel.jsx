import React from "react";
import "../style.scss";
import PacientList from "./PacientList";
import { useDispatch, useSelector } from "react-redux";
import { setActiveList } from "../redux/userReducer";

export default function Rightpanel() {
  const activeList = useSelector((state) => state.users.activeList);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  function setActiveBtn(e) {
    dispatch(setActiveList(e.target.value));
  }
  return (
    <div className="right-panel">
      <div className="right-panel__header">
        <button
          className={
            activeList === "present"
              ? "right-panel__btn right-panel__btn--active"
              : "right-panel__btn"
          }
          value="present"
          onClick={setActiveBtn}
        >
          Присутствуют ({users.presentList.length})
        </button>
        <button
          className={
            activeList === "quittin"
              ? "right-panel__btn right-panel__btn--active"
              : "right-panel__btn"
          }
          value="quittin"
          onClick={setActiveBtn}
        >
          Выбывшие ({users.quittinList.length})
        </button>
      </div>
      <div className="pacient-table">
        <div className="pacient-table__header">
          <div className="pacient-table__number">№ИБ</div>
          <div className="pacient-table__name">ФИО</div>
          <div className="pacient-table__bedNumber">
            {activeList === "present" ? "Палата" : "Причина выбытия"}{" "}
          </div>
        </div>
        {users.length === 0 ? (
          <>{"Нет данных"}</>
        ) : activeList === "present" ? (
          users.presentList.map((user, index) => {
            return <PacientList key={user.firstName} {...user} index={index} />;
          })
        ) : (
          users.quittinList.map((user, index) => {
            return <PacientList key={user.firstName} {...user} index={index} />;
          })
        )}
      </div>
    </div>
  );
}
