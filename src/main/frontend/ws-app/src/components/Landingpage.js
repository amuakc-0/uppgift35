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
      editable: false,
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
        editable: false,

    },
    {
        field: 'status',
        headerName: 'Status',
        width: 110,
        editable: true,

    },
];


    const [isLoaded,setIsLoaded] = useState(false);
    const [rowData, setRowData] = useState([]);
    const [postResults, setPostResult] = useState([]);




/*  RULLISTOR */

// Kurskod
    const [courseCode, setCourseCode] = useState();

// Modul i Canvas
    const [canvasModule, setCanvasModule] = useState();

// Ladokmodul
    const [ladokModule, setLadokModule] = useState();

//
    const useFakeMutation = () => {
        return React.useCallback(
            (resultat) =>
                new Promise((resolve, reject) =>
                    setTimeout(() => {
                        //ändra if-sats för att ge något riktigt fel
                        if (resultat.name?.trim() === '') {
                            reject(new Error("Error while saving user: name can't be empty."));
                        } else {
                            resolve(resultat);
                        }
                    }, 200),
                ),
            [],
        );
    };
//
    const mutateRow = useFakeMutation();


/* FUNCTIONS TRIGGERED ON SELECTION OF DROP-DOWN MENUES */

// Kurskod
     // function handleSelect(courseCode) {

/*  Denna funkar att ju köra utanför funktionen, laddar in det som finns i lokala mysql..
    Inte fått till att den ska ladda in resultat först när man gjort ett val i listan

          const [isLoaded,setIsLoaded] = useState(false);
          const [rowData,setRowData] = useState([]);
          useEffect(() => {
              const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode=D0025E')
              response.then((response) => {
              setIsLoaded(true);
              console.log(response.data);
              setRowData(response.data);
          });}, []);
}


              console.log(courseCode.value);
              const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode=D0025E')
              response.then((response) => {
                  setIsLoaded(true);
                  console.log(response.data);
                  setRowData(response.data);
              }); }*/


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
    const [optionList1, setOptionList1] = useState([

    ]); //{ value: "D0032N", label: "D0032N" }, {value: "DK3003", label: "DK3003"}

// Canvas options
    const [optionList2, setOptionList2] = useState([{ value: "D0032N", label: "D0032N" }]);

// Ladok options
    const [optionList3, setOptionList3] = useState([{ value: "D0032N", label: "D0032N" }]);

//Test
    function testButton() {
        const response = axios.get('http://localhost:8080/epok/find')
        response.then((response) => {
            setIsLoaded(true);
            console.log(response.data);
            setOptionList1(response.data);
            console.log(response.data);
        });


    }

//FOR EDITING ROWS AND UPDATING DB WITH EDITS
   /* const processRowUpdate = (newRow: any) => {
        const updatedRow = { ...newRow, isNew: false };
        //handle send data to api
        console.log(JSON.stringify(newRow));
        //pushes updated row into array of all updated rows
        postResults.push(JSON.stringify(newRow));

        return updatedRow;
    };*/
    const handleRowEditCommit = (cellData) => {
        console.log("fire handleRowEditCommit");
        const { id, field, value } = cellData;
        console.log(cellData.row);
        postResults.push(JSON.stringify(rowData));
        console.log(postResults);
        //console.log(JSON.stringify(cellData));
    }

    const handleSubmit = (cellData) => {
        console.log("fire handleSubmit");
        const { id, field, value } = cellData;
        console.log("cellData: " + cellData);
        console.log("cellData.row: " + cellData.row);
        //console.log(JSON.stringify(cellData));
        postResults.push(rowData);
        console.log(postResults);
    }

    //Post array of updated rows to DB on button click
    function testButton2() {
        console.log(postResults);
        axios.post('http://localhost:8080/ladok/reg_Resultat?listOfResults[]='+postResults);
    }

    const processRowUpdate = React.useCallback(
        async (newRow) => {
            // Make the HTTP request to save in the backend
            const response = await mutateRow(newRow);
            console.log(response);
            setPostResult(JSON.stringify(response));
           // console.log(postResults);
            ///await axios.post('http://localhost:8080/ladok/reg_Resultat?listOfResults[]='+postResults);
            return response;
        },
        [mutateRow],
    );

    const handleProcessRowUpdateError = React.useCallback((error) => {
    }, []);


  return (
    <section className="header">
        <div className="background">
         <div className="drop-downs">
    <div className="desc">

        Kurskod
<div className="dropdown-container">
            <Select
            options={optionList1}
                      placeholder="Välj kurskod i listan"
                      value={courseCode}
                      onChange={handleSelect}
                      onMenuOpen={testButton}
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
                    processRowUpdate={processRowUpdate}
                    onProcessRowUpdateError={handleProcessRowUpdateError}
                    experimentalFeatures={{ newEditingApi: true }}
                    editMode="row"
                  />
                </Box>


            <div>


          </div>
            <div className="button">
                <button onClick={testButton2}>Testa</button>
    </div>
</div>
        </div>
        </div>
      </div>
      </section>
  );
}

export default Landingpage;
