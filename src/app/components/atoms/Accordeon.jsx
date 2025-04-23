"use client"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import React from 'react';
import { motion } from 'framer-motion';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Accordeon(props) {
  const Acc = styled(Accordion)(() => ({
    margin: '0px !important',
    border: 0,
    padding: '20px',
    borderTop: 0,
    boxShadow: 'none',
    borderBottom: 0,
    '@media (max-width:768px)': {
      padding: '10px 5px',
    },
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
      <AccordionSummary className=' h-16'>
        <div className='max-w-2xl text-left '>
          <b className={`sm:text-2xl text-xl font-thin text-left ${props.expanded && 'text-black/60'}`}>
            {props.title} {!props.expanded && <ArrowDropDownIcon />}
          </b>
        </div>
      </AccordionSummary>
      <Accc className='text-xl text-black max-w-2xl border-0 overflow-x-hidden'>{props.children}</Accc>
    </Acc>
  );
}
