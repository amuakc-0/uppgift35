import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './/Landingpage.css';
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from "axios";
import Select from "react-select";



function Landingpage2() {


//Hårdkodade objekt som används i datagriden
/*
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
    useEffect(() => {
        const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode=DK103')
         response.then((response) => {
        setIsLoaded(true);
        console.log(response.data);
        setRowData(response.data);
    });}, []);
*/

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



// Rullistan tidigare
    const [category, setCategory] = useState();

//ny rullista
    const [courseCode, setCourseCode] = useState();

      // Array of all options
      const optionList = [
        { value: "null", label: "-" },
        { value: "D0032N", label: "D0032N" },
        { value: "D0019N", label: "D0019N" },
        { value: "D0020N", label: "D0020N" },
        { value: "D0025E", label: "D0025E" },
        { value: "D0024E", label: "D0024E" }
      ];


      // Function triggered on selection
      function handleSelect(data) {
        setCourseCode(data);







      }


  return (


    <section className="header">
        <div className="background">

         <div className="drop-downs">
    <div className="desc">
        <p> Kurskod
<div className="dropdown-container">
            <Select
            options={optionList}
                      placeholder="Välj kurskod i listan"
                      value={courseCode}
                      onChange={handleSelect}
                      isSearchable={true}
                  />
</div>

            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
              />
            </Box>



Modul i Canvas
            <select>

                    <option value="CanvasModul" onClick={(e => setCategory(null))}>-</option>
                    <option value="sport" onClick={(e => setCategory("sport"))}>Sport</option>
                    <option value="senasteNytt" onClick={(e => setCategory("senasteNytt"))}>Senaste Nytt</option>
                    <option value="kungafamiljen" onClick={(e => setCategory("kungafamiljen"))}>Kungafamiljen</option>
                    <option value="kultur" onClick={(e => setCategory("kultur"))}>Kultur</option>
            </select>


Modul i Ladok
            <select>
                    <option value="LadokModul" onClick={(e => setCategory(null))}>-</option>
                    <option value="sport" onClick={(e => setCategory("sport"))}>Sport</option>
                    <option value="senasteNytt" onClick={(e => setCategory("senasteNytt"))}>Senaste Nytt</option>
                    <option value="kungafamiljen" onClick={(e => setCategory("kungafamiljen"))}>Kungafamiljen</option>
                    <option value="kultur" onClick={(e => setCategory("kultur"))}>Kultur</option>
            </select>
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

export default Landingpage2;