import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { TableContainer,TableCell,TableBody,TableRow,TableHead,Table } from '@mui/material'
import Paper from '@mui/material/Paper';

function History() {
    const [data,setData]=useState(null);
    useEffect(()=>{

       const callHistory=async()=>{ await axios.get('http://localhost:3000/history').
        then((res)=>{
            setData(res.data);
            console.log(res);
        });
    }
    callHistory();
    },[]);
  return (
    <>
        <TableContainer sx={{mt:1}}  component={Paper}>
      <Table  sx={{ minWidth: 1180,minHeight:509 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><span style={{fontWeight:'bold'}}>Nom</span></TableCell>
            <TableCell align="center"><span style={{fontWeight:'bold'}}>Temps</span></TableCell>
            <TableCell align="right"><span style={{fontWeight:'bold'}}>Image</span></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data? (data.map((row) => (
            
            <TableRow
              key={Math.random()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <span style={{fontWeight:'bold'}}>{row.name}</span>
              </TableCell>
              <TableCell align="center">{row.timestamp}</TableCell>
              <TableCell align="right">{row.image_path?  (<img   style={{ width: 100, height: 100 }} src={`${row.image_path}`} />):(<img src='https://w7.pngwing.com/pngs/775/223/png-transparent-logo-symbol-information-ok-miscellaneous-grass-web-button-thumbnail.png' />)}</TableCell>
            </TableRow>)
            
            )):
            (null)}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default History
