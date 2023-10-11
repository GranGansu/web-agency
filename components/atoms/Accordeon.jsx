import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import React from 'react';
import { motion } from 'framer-motion';
export default function Accordeon(props) {
  const Acc = styled(Accordion)(() => ({
    margin: '0px !important',
    border: 0,
    padding: '20px',
    borderTop: 0,
    boxShadow: 'none',
    borderBottom: 0,
    '&:hover': { cursor: 'pointer', background: 'rgb(254 240 138)' },
    background: props.expanded ? 'rgb(254 240 138)' : '',
    '&:nth-of-type(1)': {
      borderTop: 0,
      borderBottom: 0,
    },
  }));
  const Accc = motion(AccordionDetails);
  return (
    <Acc {...props}>
      <AccordionSummary className=''>
        <div className='max-w-2xl text-center m-auto '>
          <b className='text-2xl'>{props.title}</b>
        </div>
      </AccordionSummary>
      <Accc className='text-xl max-w-2xl m-auto border-0'>{props.children}</Accc>
    </Acc>
  );
}
