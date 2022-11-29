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
      field: 'studentAnvandare',
      headerName: 'Student ID',
      width: 90,
      editable: false,
  },
    {
        field: 'pnr',
        headerName: 'Personnummer',
        width: 140,
        editable: false,

    },

    {
        field: 'studentNamn',
        headerName: 'Namn',
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
    editable: false,
  },
  {
    field: 'modul',
    headerName: 'Modul',
    width: 110,
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
    const [course, setCourse] = useState("Välj kurskod först");

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




// Körs när man startar eventet att välja kurs = sätter courseCode = courseCode.value
      function handleSelectCourseCode(courseCode) {
              console.log(courseCode.value);
            const thisCourse = courseCode.value;
            console.log(thisCourse);
             setCourse(thisCourse);
              /*const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode='+courseCode.value)
              response.then((response) => {
                  setIsLoaded(true);
                  console.log(response.data);
                  setRowData(response.data);
              });*/
      }


/* ARRAYS OF OPTIONS */

//Kurskod options
    const [optionList1, setOptionList1] = useState([]);

// Canvas options
    const [optionList2, setOptionList2] = useState([]);

// Ladok options
    const [optionList3, setOptionList3] = useState([]);


/* DYNAMISK INLÄSNING AV RESPEKTIVE MENYVAL FRÅN DB */


    //Inläsning av kurskoder
    function courseMenu() {
        const response = axios.get('http://localhost:8080/epok/find')
        response.then((response) => {
            setIsLoaded(true);
            console.log(response.data);
            setOptionList1(response.data);
            console.log(response.data);
        });}

    //Inläsning av moduler

    function canvasModuleMenu() {
        console.log(course.value);
        if (course != "Välj kurskod") {
        const response = axios.get('http://localhost:8080/epok/find_Modules?courseCode='+course)
        response.then((response) => {
            setIsLoaded(true);
            console.log(response.data);
            setOptionList2(response.data);
            console.log(response.data);
        });} else {

        }

    }

    function ladokMenu() {
        console.log(course.value);
        if (course != "Välj kurskod") {
            const response = axios.get('http://localhost:8080/ladok/find_Modules?courseCode='+course)
            response.then((response) => {
                setIsLoaded(true);
                console.log(response.data);
                setOptionList3(response.data);
                console.log(response.data);
            });} else {

        }}

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
        console.log(JSON.stringify(cellData));
        postResults.push(rowData);
        console.log(postResults);
    }

    //Loads data grid with data

    function showResult() {
        const response = axios.get('http://localhost:8080/ladok/find_Resultat?courseCode='+course)
        response.then((response) => {
            setIsLoaded(true);
            console.log(response.data);
            setRowData(response.data);
        });

    }
    //Post array of updated rows to DB on button click
    function sendButton() {
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
                      onChange={handleSelectCourseCode}
                      onMenuOpen={courseMenu}
                      isSearchable={true}
                  />


</div>


Modul i Canvas
<div className="dropdown-container">
            <Select
            options={optionList2}
                      placeholder="Välj Canvasmodul i listan"
                      value={canvasModule}
                      onMenuOpen={canvasModuleMenu}
                      isSearchable={true}
                  />
</div>


Modul i Ladok
<div className="dropdown-container">
            <Select
            options={optionList3}
                      placeholder="Välj Ladokmodul i listan"
                      value={ladokModule}
                      onMenuOpen={ladokMenu}
                      isSearchable={true}
                  />
</div>

</div>
</div>
 </div>

      <div className="container">
      <div className="home">

      <div className="resultButton">
        <button onClick={showResult}>Visa resultat</button>
      </div>

      <div className="sendButton">
         <button onClick={handleSubmit}>Överför resultat till Ladok</button>
      </div>


        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>


          <div className="description">

               <Box sx={{ height: 400, width: '550%' }}>
                  <DataGrid
                    rows={rowData}
                    getRowId={(row: any) =>  row.pnr}
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

</div>
        </div>
        </div>
      </div>
      </section>
  );
}

export default Landingpage;
