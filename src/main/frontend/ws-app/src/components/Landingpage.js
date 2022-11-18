import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './/Landingpage.css';
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";


function Landingpage() {


//Hårdkodade objekt som används i datagriden

const columns: GridColDef[] = [
  {
      field: 'ladokid',
      headerName: 'Ladok ID',
      width: 90,
  },
  {
    field: 'betyg',
    headerName: 'Betyg',
    width: 150,
    editable: true,
  },
  {
    field: 'datum',
    headerName: 'Examinationsdatum',
    width: 150,
    editable: true,
  },
  {
    field: 'kurskod',
    headerName: 'Kurskod',
    width: 110,
    editable: true,
  },
  {
    field: 'modul',
    headerName: 'Modul',
    width: 110,
    editable: true,

  },
    {
        field: 'pnr',
        headerName: 'Personnummer',
        width: 110,
        editable: true,

    },
    {
        field: 'status',
        headerName: 'Status',
        width: 110,
        editable: true,

    },
];

    const [isLoaded,setIsLoaded] = useState(false);
    const [rowData,setRowData] = useState([]);
    useEffect(() => {
        const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode=DK103')
         response.then((response) => {
        setIsLoaded(true);
        console.log(response.data);
        setRowData(response.data);
    });}, []);

/*const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];*/



  return (


    <section className="header">
        <div className="background">


Här kan man lägga rullistor tänker jag


        </div>



      <div className="container">

      <div className="home">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>


          <div className="description">




                <Box sx={{ height: 400, width: '350%' }}>
                  <DataGrid
                    rows={rowData}
                    getRowId={(row: any) =>  row.ladokid + row.pnr}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                  />
                </Box>








            <div className="button">


          </div>

            <div>


    </div>


</div>


        </div>
        </div>
      </div>
      </section>


  );
}

export default Landingpage;