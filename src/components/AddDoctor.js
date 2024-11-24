import React, { useState } from "react";

function AddDoctor() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleAddDoctor = () => {
    if (name && phone && specialization) {
      setDoctors([...doctors, { name, phone, specialization }]);
      setName("");
      setPhone("");
      setSpecialization("");
    } else {
      alert("Будь ласка, заповніть всі поля!");
    }
  };

  const handleDeleteDoctor = (index) => {
    doctors.splice(index, 1);
    setDoctors([...doctors]);
  };

  const handleEditDoctor = (index) => {
    if (name && phone && specialization) {
      doctors.splice(index, 1);
      setDoctors([...doctors]);
      setDoctors([...doctors, { name, phone, specialization }]);
      setName("");
      setPhone("");
      setSpecialization("");
    } else {
      alert("Будь ласка заповніть всі поля!");
    }
  };

  return (
    <div>
      <h2 className="title-text">Додати лікаря</h2>
      <div className="div-content">
        <table className="table-title">
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Телефон</th>
              <th>Спеціалізація</th>
              <th>Дії</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.name}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.specialization}</td>
                <td>
                  <button
                    onClick={() => handleDeleteDoctor(index)}
                    className="btn"
                  >
                    Видалити
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleEditDoctor(index)}
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
          placeholder="Ім'я та прізвище лікаря"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Телефон лікаря"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Спеціалізація лікаря"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <button onClick={handleAddDoctor} className="btn">
          Додати лікаря
        </button>
      </div>
    </div>
  );
}

export default AddDoctor;
