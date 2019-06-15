import { Card, Col, Row,Icon,Avatar } from 'antd';
import React from 'react';
import { NavLink} from 'react-router-dom';
import { GLOBALS} from '../../../../globals/globals-variables';
const { Meta } = Card;




const ContenedorCardsBrowser = () => {
  return(
    <div style={{ background: '#F0F0DF', padding: '30px' }}>
    <Row gutter={16}>
      <Col span={8}>
      <Card      
    
      title="Registra tus viajes"
      cover={<img alt="example" src={`${GLOBALS.rootImages}/travel1.jpg`}  />}
      extra={<NavLink exact to="/misviajes" className="nav-link" >More</NavLink>}
    >
      Registra tus viajes, las fechas y los lugares que visitados.
    </Card>
      </Col>
      <Col span={8}>
      <Card  
      cover={<img alt="example" src={`${GLOBALS.rootImages}/traveltime.jpg`} />}
      title="Registra tus próximos destinos"
      extra={<NavLink exact to="/porvisitar" className="nav-link" >More</NavLink>}
    >
      Has una lista de tus viajes en el futuro, sin orden ni fecha solo posibles lugares.
    </Card>
      </Col>
      <Col span={8}>
      <Card  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
    </Row>
  </div>
  )

  }

  export {ContenedorCardsBrowser};