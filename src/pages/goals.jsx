import React from "react";
import { Grid } from "@mui/material";
import './goals.css';
import Select from "react-select";
import Button from '@mui/material/Button';

const options =[
    {value:'3-A', label:'3-A'},
    {value:'3-B', label:'3-B'},
    {value:'3-C', label:'3-C'},
    {value:'3-D', label:'3-D'},
]

const SelectbleBoxs = () =>{
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <p>Class</p>
                    <Select isMulti options={options} isSearchable={true} />
                </Grid>
                <Grid item xs={3}>
                    <p>Student</p>
                    <Select isMulti options={options} isSearchable={true} />
                </Grid>
                <Grid item xs={3}>
                    <p>Type</p>
                    <Select isMulti options={options} isSearchable={true} />
                </Grid>
                <Grid item xs={3}>
                    <p>Topic</p>
                    <Select isMulti options={options} isSearchable={true} />
                </Grid>
                <Grid item xs={3}>
                    <p>Level</p>
                    <Select isMulti options={options} isSearchable={true} />
                </Grid>
                <Grid item xs={3}>
                    <p>Chapter</p>
                    <Select isMulti options={options} isSearchable={true} />
                </Grid>
                <Grid item xs={3}>
                    <Button color="secondary" variant="contained">Set Goal</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="secondary" variant="contained">Publish Goal</Button>
                </Grid>
            </Grid>
        </>
    );
};

const Goals = () =>{
    return(
        <div>
            <h1>Goals</h1>
            <SelectbleBoxs />
        </div>
    )
}
export default Goals;