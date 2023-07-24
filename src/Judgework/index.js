import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { generateCompletion } from '../ChatGpt'
import GeneratedSection from '../GeneratedSection';


const RecommenderDetails = ({setDetails}) =>{
    return <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ width: '30%' }}>
            <TextField required fullWidth label='Recommender Name' id="outlined-basic" variant="outlined" onBlur={(e) => setDetails({ recommenderName: e.target.value })} />
        </div>
        <div style={{ width: '30%' }}>
            <TextField required fullWidth label='Recommender Role' id="outlined-basic" variant="outlined" onBlur={(e) => setDetails({ recommenderRole: e.target.value })} />
        </div>
        <div style={{ width: '30%' }}>
            <TextField required fullWidth label='Recommender Company' id="outlined-basic" variant="outlined" onBlur={(e) => setDetails({ recommenderCompany: e.target.value })} />
        </div>
        <div style={{ width:'100%', marginTop: 20 }}>
            <TextField required rows={5} multiline fullWidth label='Recommender Organization Information' id="outlined-basic" variant="outlined" onBlur={(e) => setDetails({ projDesc: e.target.value })} />
        </div>
    </div>


}

const JudgeWork = ({}) =>{
    return <div>
        <p>Hello-World</p>
    </div>
}
export default RecommenderDetails