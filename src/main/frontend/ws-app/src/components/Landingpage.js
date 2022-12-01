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
    editable: true,
  },
  {
    field: 'modul',
    headerName: 'Modul',
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

    //Variabler

    const [isLoaded,setIsLoaded] = useState(false);
    const [student, setStudent] = useState([]);
    const [rowData, setRowData] = useState([]);
    const  thisResult = [];
    const [postResults, setPostResult] = useState([]);
    const [ladokModulePrint, setLadokModulePrint] = useState();





/*  RULLISTOR */

// Kurskod
    const [courseCode, setCourseCode] = useState();
    const [course, setCourse] = useState("Välj kurskod först");

// Modul i Canvas
    const [canvasModule, setCanvasModule] = useState();

// Ladokmodul
    const [ladokModule, setLadokModule] = useState();

//Funktion för att skriva ut nya rader som ändrats
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





// Körs när man startar eventet att välja kurs = sätter courseCode = courseCode.value
      function handleSelectCourseCode(courseCode) {
              console.log(courseCode.value);
            const thisCourse = courseCode.value;
            console.log(thisCourse);
             setCourse(thisCourse);
      }

    function handleSelectLadokModule(ladokModule) {
        console.log(ladokModule.value);
        const thisCanvasModule = ladokModule.value;
        console.log(thisCanvasModule);
        setLadokModulePrint(thisCanvasModule);
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




    //Loads data grid with data

    function rows() {
        let one = "http://localhost:8080/canvas/find?kurskod="+course;
        var students = [];

        const requestOne = axios.get(one)
        requestOne.then((response) => {
            setIsLoaded(true);
            students = response.data;

             const studentList = students.map(async student => {
                 var pnr = await axios.get("http://localhost:8080/its/find?studentAnvandare="+student.studentAnvandare).then(response => response.data);;
                 student.pnr = pnr;
                 student.modul = ladokModulePrint;
                 student.kurskod = course;
                 console.log(student);
             })


            setRowData(students)
        })

        };


    //Post array of updated rows to DB on button click
    function sendButton() {
        console.log(postResults);
        if (postResults.length > 0) {
            axios.post('http://localhost:8080/ladok/request', postResults);
        } else {
            alert("Inga resultat har matats in");
        }


    }

    //Function for row update, new row puhsed to array postResult
    const processRowUpdate = React.useCallback(
        async (newRow) => {
            // Make the HTTP request to save in the backend

            const response = await mutateRow(newRow);
            console.log(response);
            thisResult.push(response);
            console.log(thisResult);
            setPostResult(thisResult);
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
                      onChange={handleSelectLadokModule}
                  />
</div>

</div>
</div>
 </div>

      <div className="container">
      <div className="home">

      <div className="resultButton">
        <button onClick={rows}>Visa resultat</button>
      </div>

      <div className="sendButton">
         <button onClick={sendButton}>Överför resultat till Ladok</button>
      </div>


        <div className="row align-items-center my-5">
          <div className="col-lg-7">

          </div>


          <div className="description">

               <Box sx={{ height: 400, width: '550%' }}>
                  <DataGrid
                    rows={rowData}
                    getRowId={(row: any) =>  row.studentAnvandare + row.pnr}
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
