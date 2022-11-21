import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './/Landingpage.css';
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";
import Select from "react-select";



function Landingpage() {


/* ATTRIBUTES OF DATAGRID */

const columns: GridColDef[] = [
  {
      field: 'ladokid',
      headerName: 'Ladok ID',
      width: 90,
  },
  {
    field: 'betyg',
    headerName: 'Betyg',
    width: 130,
    editable: true,
  },
  {
    field: 'datum',
    headerName: 'Examinationsdatum',
    width: 160,
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
        width: 140,
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


/*  RULLISTOR */

// Kurskod
    const [courseCode, setCourseCode] = useState();

// Modul i Canvas
    const [canvasModule, setCanvasModule] = useState();

// Ladokmodul
    const [ladokModule, setLadokModule] = useState();

  //  const [course, setCourse] = useState([]);



/* FUNCTIONS TRIGGERED ON SELECTION OF DROP-DOWN MENUES */

// Kurskod
      function handleSelect(courseCode) {
              console.log(courseCode.value);
              const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode='+courseCode.value)
              response.then((response) => {
                  setIsLoaded(true);
                  console.log(response.data);
                  setRowData(response.data);
              }); }

// Modul i Canvas
      function handleSelect(courseCode) {
              console.log(courseCode.value);
              const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode='+courseCode.value)
              response.then((response) => {
                  setIsLoaded(true);
                  console.log(response.data);
                  setRowData(response.data);
              }); }

// Modul i Ladok
      function handleSelect(courseCode) {
              console.log(courseCode.value);
              const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode='+courseCode.value)
              response.then((response) => {
                  setIsLoaded(true);
                  console.log(response.data);
                  setRowData(response.data);
              });


      }


/* ARRAYS OF OPTIONS */

//Kurskod options
    const [optionList1, setOptionList1] = useState([{ value: "D0032N", label: "D0032N" }]);

// Canvas options
    const [optionList2, setOptionList2] = useState([{ value: "D0032N", label: "D0032N" }]);

// Ladok options
    const [optionList3, setOptionList3] = useState([{ value: "D0032N", label: "D0032N" }]);



//Börjat fundera på hur man kan ladda listan med kurskoder från DB, inte fått till det ännu
/*   useEffect(() => {
        const resp = axios.get('http://localhost:8080/epok/find')
        resp.then((resp) => {
        console.log(resp.data);
        setOptionList({ value: resp.courseCode, label: resp.courseName });
        })});
*/
  return (
    <section className="header">
        <div className="background">
         <div className="drop-downs">
    <div className="desc">
        <p> Kurskod
<div className="dropdown-container">
            <Select
            options={optionList1}
                      placeholder="Välj kurskod i listan"
                      value={courseCode}
                      onChange={handleSelect}
                      isSearchable={true}
                  />
</div>


Modul i Canvas
<div className="dropdown-container">
            <Select
            options={optionList2}
                      placeholder="Välj Canvasmodul i listan"
                      value={canvasModule}
                      onChange={handleSelect}
                      isSearchable={true}
                  />
</div>


Modul i Ladok
<div className="dropdown-container">
            <Select
            options={optionList3}
                      placeholder="Välj Ladokmodul i listan"
                      value={ladokModule}
                      onChange={handleSelect}
                      isSearchable={true}
                  />
</div>
</p>
</div>
</div>
 </div>

      <div className="container">

      <div className="home">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>


          <div className="description">

               <Box sx={{ height: 400, width: '500%' }}>
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