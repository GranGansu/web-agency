'use client';
import { List, ListItemIcon, ListItem } from '@mui/material';

export default function Pricing({ title, price, pros }) {
  return (
    <div className='shadow sm:shadow-lg border  border-gray-200 p-4 px-6 rounded-xl w-full'>
      <span className='text-center'>desde</span>
      <p className='text-center font-bold text-5xl'>{price}€</p>
      <p className='text-2xl rounded-full px-4 text-center bg-accentd text-white w-fit mx-auto mt-2'>{title}</p>
      {/*    <hr className='my-4 '></hr> */}
      <List>
        {pros.map((pro, key) => {
          return (
            <ListItem key={key}>
              <ListItemIcon>
                <span className='material-icons'>check</span>
              </ListItemIcon>
              {pro}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
