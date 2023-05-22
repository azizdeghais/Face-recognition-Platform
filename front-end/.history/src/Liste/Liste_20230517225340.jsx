import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
  

export default function Ajouter() {
 
  const [data,setData]=useState(null);
  
  useEffect(()=>{
    const fetchData=async()=>{
     await axios.get('http://localhost:3000/users').then((res)=>{setData(res.data);console.log(res)});
    }
    fetchData();
  },[])
  
  return (
    <TableContainer  component={Paper}>
      <Table  sx={{ minWidth: 1080,minHeight:509,mt:10 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom & Prénom</TableCell>
            <TableCell align="center">Numero / Email / Date de naissance</TableCell>
            <TableCell align="center">Debut</TableCell>
            <TableCell align="right">Fin</TableCell>
            <TableCell align="center">Photo choissi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data? (data.map((row) => (
            
            <TableRow
              key={row.nom}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nom} {row.prenom}
              </TableCell>
              <TableCell align="right">{row.numero}{row.email}{row.naissance}</TableCell>
              <TableCell align="right">{row.debut}</TableCell>
              <TableCell align="right">{row.fin}</TableCell>
              <TableCell align="right"><img width="150px" height="150px"  src={`${row.url}`} /></TableCell>
            </TableRow>)
            
            )):(<p>Il n ya aucun utilisateur pour le moment!</p>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
