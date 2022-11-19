import { Layout, Select, Typography, Col, Row, Table, Form, Input, Button,Alert  } from 'antd';
import React, {useState, useEffect} from 'react';


const { Title, Text } = Typography;
const { Header, Content } = Layout;


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const columns = [
    {title: 'Name', dataIndex: 'name', },
    {title: 'Department', dataIndex: 'department', },
    {title: 'Present',  dataIndex: 'present', },
  ];

const Report = () => {

    const [tdy, setTdy] = useState(today)
    const [data, setData] = useState([])

    const fetchStatus = async () => {
        const response = await fetch("https://api-all-app.herokuapp.com/sendmail")
        // const response_js = await response.json()
        // console.log(response_js)
        // setData(response_js) 
    }

    // useEffect(() => {
    //     fetchStatus()
    // }, [])
    return( <>
    <Layout>
    <Header  style={{height:150, textAlign: 'center', padding:6}}>
      <Typography>
        <Title style={{color: "white", fontSize:28}}>
            Attendance Log
        </Title>
        <Text style={{color: "white"}}>{tdy}</Text>
     </Typography>
      </Header>
      <Content>
   
            <Table style={{margin: 6}}  columns={columns}></Table>
            <Button onClick={fetchStatus}>Submit</Button>
      </Content>
    </Layout></>
    )
}

export default Report;