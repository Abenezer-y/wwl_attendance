import { Layout, Select, Typography, Col, Row, Switch, Form, Input, Button  } from 'antd';
import React, {useState} from 'react';


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
  { value: 'Izabella Magdowska', label: 'Izabella Magdowska', },
  { value: 'Konrad Kita', label: 'Konrad Kita', },
  { value: 'Ethelmae Jewel Suguitan', label: 'Ethelmae Jewel Suguitan', },
  { value: 'Gabija Meilunaite', label: 'Gabija Meilunaite', },
  { value: 'Konrad Kita', label: 'Konrad Kita', },
  { value: 'Ethelmae Jewel Suguitan', label: 'Ethelmae Jewel Suguitan', },
  { value: 'Abdulrahman Mohhamed Ahmed Albahri', label: 'Abdulrahman Mohhamed Ahmed Albahri', },
  { value: 'Jose Fernando', label: 'Jose Fernando', },
  { value: 'Kamil Kabaszyn', label: 'Kamil Kabaszyn', },
  { value: 'Saud Aljumairi', label: 'Saud Aljumairi', },
  { value: 'Brian Njoroge Wanjiku', label: 'Brian Njoroge Wanjiku', },
]

const dep_4 =  [ {value: 'Mohammad Waqas', label: 'Mohammad Waqas',},
                { value: 'Azreena Shaheed', label: 'Azreena Shaheed', },
                { value: 'Cecil Varghese', label: 'Cecil Varghese', },
                { value: 'Konrad Kita', label: 'Skate Exchange', },
                { value: 'Raees Sulaiman', label: 'Raees Sulaiman', },
                {value: 'Maryam Salim Jalil', label: 'Maryam Salim Jalil',},
                { value: 'Fariha Anees', label: 'Fariha Anees', },
                { value: 'Anne Perera', label: 'Anne Perera', },
                { value: 'Mohamed Ben Zaid', label: 'Mohamed Ben Zaid', },
                { value: 'Lois  Acquah', label: 'Lois  Acquah', },
                { value: 'Arjun s Mohan ', label: 'Arjun s Mohan ', },
                { value: 'Rajesh Greeson', label: 'Rajesh Greeson', },
                { value: 'Sen Mathew', label: 'Sen Mathew', },
                { value: 'Ashik Kurin', label: 'Ashik Kurin', },
                { value: 'Jason John', label: 'Jason John', },
  ]



const dep_5 =  [ {value: 'Jewel Lisa Rose Dsouza', label: 'Jewel Lisa Rose Dsouza',},
  { value: 'Mishaal Siraj', label: 'Mishaal Siraj', },
  { value: 'Janindee Onethra Dissanayake', label: 'Janindee Onethra Dissanayake', },
  { value: 'Arman Miha', label: 'Arman Miha', },
  { value: 'Abdul Hakim', label: 'Abdul Hakim', },
  { value: 'Muddasser', label: 'Muddasser', },
  { value: 'Cedric V. Daysa', label: 'Cedric V. Daysa', },
  { value: 'Ruth Ann Wanjiku', label: 'Ruth Ann Wanjiku', },
  { value: 'Kristina Atienza', label: 'Kristina Atienza', },
]

const App = () => {

    // const [tdy, setTdy] = useState(today)
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
        setName(dep_3)
      }
      else if (value === 'Skate Exchange'){
        setSelect(false)
        setName(dep_4)
      }
      else if (value === 'Slide Marshall'){
        setSelect(false)
        setName(dep_5)
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
        <Text style={{color: "white"}}>{today}</Text>
     </Typography>
      </Header>
      <Content>
      <Row style={{margin: 6}} type="flex" justify="center">
            <Col><Select defaultValue="- Department -"  style={{width: 180, margin: 6, height: 45}} onChange={on_department}  options={data}/></Col> 
            <Col><Select defaultValue="- Name -"  onChange={handleChange} style={{ width: 180, margin: 6, height: 45}}  disabled={select_status} options={name_list} /></Col> 
            
     </Row>
     <Row style={{margin: 6}} type="flex" justify="center">
      <Col>
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
        </Col> 
    </Row>
      </Content>
      {/* <Footer>Footer</Footer> */}
    </Layout></>
    )
}

export default App;