import React from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Card, Row } from "antd";
const Crud = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      name: "react js",
      desc: "Mempelajari usestate, useeffect, usememo dan hooks yang lain.",
    },
    {
      id: 2,
      name: "belajar react native",
      desc: "Mempelajari view, text, image, dan component lainnya",
    },
    {
      id: 3,
      name: "mapping pada react js",
      desc: "Belajar membuat nilai baru menggunakan mapping.",
    },
  ]);
  const [query, setQuery] = React.useState("");
  const filteredData = data.filter((item) => {
    return item.name.includes(query);
  });
  const [newData, setNewData] = React.useState([
    {
      id: "",
      name: "",
      desc: "",
    },
  ]);
  const { name, desc } = newData;
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleButton = () => {
    let sumId = data.length + 1;
    setData([
      ...data,
      {
        id: sumId,
        name,
        desc,
      },
    ]);
  };
  const handleClear = (Id) => {
    const filter = data.filter((data) => data.id !== Id);
    setData(filter);
  };
  const list = filteredData.map((item, index) => {
    return (
      <Card
        style={{
          width: "50%",
          marginTop: 20,
          backgroundColor: "#34495e",
          color: "#fff",
          textAlign: "center",
        }}
        onClick={() => handleClear(item.id)}
        key={index}
      >
        <h3 style={{ textAlign: "center", fontWeight: "bold", color: "white" }}>
          {item.name}
        </h3>
        <p>{item.desc}</p>
      </Card>
    );
  });
  return (
    <div className="container">
      <h1 className="title">BELAJAR CRUD</h1>
      <div className="content">
        <div className="inputUser">
          <div style={{ border: "2px solid grey", marginTop: 20 }}>
            <input
              placeholder="typing title in here"
              size="25"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div style={{ border: "2px solid grey", marginTop: 20 }}>
            <input
              placeholder="typing desc in here"
              size="25"
              name="desc"
              value={desc}
              onChange={handleChange}
            />
          </div>
          <button
            style={{ fontWeight: "bold", color: "red", marginTop: 20 }}
            onClick={(e) => handleButton(e)}
          >
            Masukkan Data
          </button>
        </div>
        <div>
          <br />
          <h1>List Card</h1>
          <p style={{ color: "red" }}>*Klik Card untuk menghapus Card</p>
          <label style={{ fontSize: 18 }}>Search: </label>
          <input
            type="text"
            style={{ border: "1px solid grey" }}
            size={100}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query}
          <Row gutter={2}>{list}</Row>
        </div>
      </div>
    </div>
  );
};

export default Crud;
