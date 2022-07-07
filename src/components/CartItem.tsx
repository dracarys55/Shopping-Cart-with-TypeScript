import React from 'react';
import { Stack, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItem from '../data/item.json';
import formatCurrency from '../util/formatCurrency';
type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItem.find((i) => i.id === id);
  /* if (item === null) return null; */
  return (
    <Stack direction='horizontal' gap={2}>
      <img
        src={item?.imgUrl}
        alt='/'
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className='me-auto'>
        <div>
          {item?.name}
          {/* 這個＆＆的寫法是什麼意思 */}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurrency(item?.price)}
        </div>
      </div>
      <div> {formatCurrency(item?.price * quantity)}</div>
      <Button
        variant='outline-danger'
        size='sm'
        onClick={() => removeFromCart(item?.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
