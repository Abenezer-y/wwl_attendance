import { Layout, Select, Typography, Col, Row, Switch, Form, Input, Button,Alert  } from 'antd';
import React, {useState, useEffect} from 'react';


const { Title, Text } = Typography;
const { Header, Content } = Layout;


var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const { TextArea } = Input;


const data =  [ {value: 'Duty Manager', label: 'Duty Manager',},
                { value: 'Ice Rink Supervisor', label: 'Ice Rink Supervisor', },
                { value: 'Ice Marshall', label: 'Ice Marshall', },
                { value: 'Skate Exchange', label: 'Skate Exchange', },
                { value: 'Slide Marshall', label: 'Slide Marshall', },
  ]

const dep_1 =  [ {value: 'Guruwinder Singh', label: 'Guruwinder Singh',},
  { value: 'El Mostafa Ben Mouina', label: 'El Mostafa Ben Mouina', },
  { value: 'Morris Mbugu', label: 'Morris Mbugu', },
]

const dep_2 =  [ {value: 'Thembani Tywakadi', label: 'Thembani Tywakadi',},
                { value: 'Abdul Samad', label: 'Abdul Samad', },
  ]


  const dep_3 =  [ { value: 'Aleksandra Antczak', label: 'Aleksandra Antczak', },
  { value: 'Ice Rink Supervisor', label: 'Ice Rink Supervisor', },
  { value: 'Ice Marshall', label: 'Ice Marshall', },
  { value: 'Skate Exchange', label: 'Skate Exchange', },
  { value: 'Slide Marshall', label: 'Slide Marshall', },
]

const dep_4 =  [ {value: 'Duty Manager', label: 'Duty Manager',},
                { value: 'Ice Rink Supervisor', label: 'Ice Rink Supervisor', },
                { value: 'Ice Marshall', label: 'Ice Marshall', },
                { value: 'Skate Exchange', label: 'Skate Exchange', },
                { value: 'Slide Marshall', label: 'Slide Marshall', },
  ]



const dep_5 =  [ {value: 'Duty Manager', label: 'Duty Manager',},
  { value: 'Ice Rink Supervisor', label: 'Ice Rink Supervisor', },
  { value: 'Ice Marshall', label: 'Ice Marshall', },
  { value: 'Skate Exchange', label: 'Skate Exchange', },
  { value: 'Slide Marshall', label: 'Slide Marshall', },
]

const App = () => {

    const [tdy, setTdy] = useState(today)
    const [select_status, setSelect] = useState(true)
    const [other_status, setOthers] = useState(true)
    const [name_list, setName] = useState([])

    const on_department = (value) => {

      if (value === 'Duty Manager'){
        setSelect(false)
        setName(dep_1)
      }
      else if (value === 'Ice Rink Supervisor'){
        setSelect(false)
        setName(dep_2)
      }
      else if (value === 'Ice Marshall'){
        setSelect(false)
        setName(dep_1)
      }
      else if (value === 'Skate Exchange'){
        setSelect(false)
        setName(dep_1)
      }
      else if (value === 'Slide Marshall'){
        setSelect(false)
        setName(dep_1)
      }
    }

    const handleChange = (value) => {
      setOthers(false)
      };

    const handleSubmit = () => {

      window.location.reload(true);
        };
  




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
      <Row style={{margin: 6}} type="flex" justify="center">
            <Col><Select defaultValue="- Department -"  style={{width: 180, margin: 6, height: 45}} onChange={on_department}  options={data}/></Col> 
            <Col><Select defaultValue="- Name -"  onChange={handleChange} style={{ width: 180, margin: 6, height: 45}}  disabled={select_status} options={name_list} /></Col> 
            
     </Row>
     <Row style={{margin: 6}} type="flex" justify="center"> 
        <Form   wrapperCol={{ span: 14,  }} layout="horizontal" >
        <Form.Item label="Present" >
        <Switch disabled ={other_status} />
        </Form.Item>
        <Form.Item label="Remark">
            <TextArea disabled ={other_status} rows={4} />
        </Form.Item>
        <Form.Item >
          <Button disabled ={other_status} onClick={handleSubmit}>Submit</Button>
        </Form.Item>
        </Form> 
    </Row>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout></>
    )
}

export default App;