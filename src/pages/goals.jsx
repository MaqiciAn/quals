import React, { useState } from "react";
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
                    <Button className="selectBoxButtons" variant="contained">Set Goal</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button className="selectBoxButtons" variant="contained">Publish Goal</Button>
                </Grid>
            </Grid>
        </>
    );
};

const topics = [
    {value:'animals',label:'Animals'},
    {value:'fruits',label:'Fruits'},
    {value:'shapes',label:'Shapes'},
    {value:'vehicles',label:'Vehicles'},
    {value:'tools',label:'Tools'},
    {value:'jobs',label:'Jobs'},
    {value:'tech',label:'Tech'},
    {value:'science',label:'Science'},
    {value:'movies',label:'Movies'},
    {value:'films',label:'Films'},
    {value:'food',label:'Food'},
    {value:'places',label:'Places'},
    {value:'journal',label:'Journal'},
    {value:'story',label:'Story'},
    {value:'cartoon',label:'Cartoon'},
    {value:'nature',label:'Nature'},
    {value:'holiday',label:'Holiday'},
    {value:'future',label:'Future'},
];

const Ttemplates = () => {
    const[isOpen,setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const templates = topics.map(topic =>(
        <Grid item xs={2}>
            <Button className="GridButton" variant="outlined" onClick={toggle} style={{backgroundColor: isOpen? "white" : "pink"}}>{topic.label}</Button>
        </Grid>
    ));

    return(
        <>
            <p id="templateHeader">Topic Templates</p>
            <div>
                <Grid container spacing={2}>
                    {templates}
                </Grid>
            </div>
        </>
    );
};

const Goals = () =>{
    return(
        <div>
            <h1 id="goals">Goals</h1>
            <SelectbleBoxs />
            <Ttemplates />
        </div>
    )
}
export default Goals;