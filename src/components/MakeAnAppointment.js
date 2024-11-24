import React, { useState } from "react";

function MakeAnAppointment() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  let [date, setDate] = useState("");
  const [patient, setPatient] = useState([]);
  date = new Date().toDateString();

  const handleAddPatient = () => {
    if (name && phone && date) {
      setPatient([...patient, { name, phone, date }]);
      setName("");
      setPhone("");
      setDate("");
    } else {
      alert("Будь ласка, заповніть всі поля!");
    }
  };

  const handleDeletePatient = (index) => {
    patient.splice(index, 1);
    setPatient([...patient]);
  };

  const handleEditPatient = (index) => {
    if (name && phone && date) {
      patient.splice(index, 1);
      setPatient([...patient]);
      setPatient([...patient, { name, phone, date }]);
      setName("");
      setPhone("");
      setDate("");
    } else {
      alert("Будь ласка заповніть всі поля!");
    }
  };

  
  return (
    <div>
      <h2 className="title-text">Запис на прийом</h2>
      <div className="div-content">
        <table className="table-title">
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Телефон</th>
              <th>Дата</th>
              <th>Дії</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((patient, index) => (
              <tr key={index} className="table-title">
                <td>{patient.name}</td>
                <td>{patient.phone}</td>
                <td>{patient.date}</td>
                <td>
                  <button
                    onClick={() => handleDeletePatient(index)}
                    className="btn"
                  >
                    Видалити
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleEditPatient(index)}
                    className="btn"
                  >
                    Редагувати
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="div-content">
        <input
          type="text"
          placeholder="Ім'я та прізвище пацієнта"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон пацієнта"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder={date}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="date"
        />
        <button onClick={handleAddPatient} className="btn">
          Додати пацієнта
        </button>
      </div>
    </div>
  );
}

export default MakeAnAppointment;
