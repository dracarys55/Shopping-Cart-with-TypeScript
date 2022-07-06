import storeItems from '../data/item.json';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      {/* md = medium size  xs = extra small lg = large  */}
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />{' '}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
