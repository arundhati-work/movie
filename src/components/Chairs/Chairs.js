import React, {useState} from 'react';
import './Chairs.css';
import classic from '../../assets/classic.png';
import executive from '../../assets/executive.png';
import premium from '../../assets/premium.png';

const chairOptions = [
  {
    'id':1,
    image: classic,
    name: 'Classic',
    price: 200
  },
  {
    'id':2,
    image: executive,
    name: 'Executive',
    price: 300
  },
  {
    'id':3,
    image: premium,
    name: 'Premium',
    price: 400
  }
]


export default function Chairs(props) {
  const [isActive, setIsActive] = useState(1);

  const chairSelection = (chair) => {
    setIsActive(chair.id);
    props.selection(chair);
  }


  return (
    <div className='chair-container'>
      {
        chairOptions.map((chair)=>{
          return <div style={{border: chair.id===isActive? '1px solid black': ''}} key={chair.id} onClick={() => chairSelection(chair)}>
            <img src={chair.image} alt={chair.name}/>
      <p>{chair.name}</p>
      <p>Rs. {chair.price}</p>
          </div>
        })
      }
    </div>
  )
}
