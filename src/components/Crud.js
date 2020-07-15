import React from 'react'
import './style.css'
import 'antd/dist/antd.css';
import { Card, Row, Col, Divider } from 'antd';
const Crud = () => {
    const [data, setData] = React.useState([
        {
            id: 1,
            name: 'Belajar React JS Full'
        },
        {
            id: 2,
            name: 'Belajar React Native Full'
        },
        {
            id: 3,
            name: 'Mapping pada react js'
        },
    ])

    const [newData, setNewData] = React.useState([
        {
            id: '',
            name: ''
        }
    ])

    const { name } = newData

    const handleChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    }
    const handleButton = () => {
        let sumId = data.length + 1
        setData([...data, {
            id: sumId,
            name
        }])
    }
    const handleClear = (Id) => {
        const filter = data.filter(data => data.id !== Id)
        setData(filter)
    }

    const list = data.map(item => {
        return (
            <Card style={{ width: '50%', marginTop: 20, backgroundColor: '#34495e', color: '#fff', textAlign: 'center' }}
                onClick={() => handleClear(item.id)}
            >
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.name}</p>
            </Card>
        )
    })
    return (
        <div className="container">
            <h1 className="title">BELAJAR CRUD</h1>
            <div className="content">
                <div className="inputUser">
                    <div style={{ border: '2px solid grey', marginTop: 20 }}>
                        <input
                            placeholder="typing title in here"
                            size="25"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <button style={{ fontWeight: 'bold', color: 'red', marginTop: 20 }} onClick={(e) => handleButton(e)}>Masukkan Data</button>

                </div>
                <div>
                    <br />
                    <h1>List Card</h1>
                    <p style={{ color: 'red' }}>*Klik Card untuk menghapus Card</p>
                    <Row gutter={6}>

                        {list}
                    </Row>

                </div>
            </div>
        </div>
    )
}

export default Crud
