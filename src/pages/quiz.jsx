import React, {useState} from "react";
import "./quiz.css";
import { Grid } from "@mui/material";
import Select from "react-select";
import Button from '@mui/material/Button';


const chapter = [
    {value:'1',label:'Chapter I'},
    {value:'2',label:'Chapter II'},
    {value:'3',label:'Chapter III'},
    {value:'4',label:'Chapter IV'},
    {value:'5',label:'Chapter V'}
];

const level = [
    {value:'1',label:'A1'},
    {value:'2',label:'A2'},
    {value:'3',label:'B1'},
    {value:'4',label:'B2'},
    {value:'5',label:'C1'},
    {value:'6',label:'C2'}
];

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

const SelectBox = () =>{
    return(
        <>
            <Grid container spacing={3}>    
                <Grid item xs={2}>
                    <p>New Quiz Name</p>
                    <input className="quizInputs" type="text" name="quizName"/>
                </Grid>
                <Grid item xs={2}>
                    <p>Chapter</p>
                    <Select options={chapter}/>
                </Grid>
                <Grid item xs={2}>
                    <p>Level</p>
                    <Select options={level}/>
                </Grid>
                <Grid item xs={2}>
                    <p>Topic</p>
                    <Select isMulti options={topics} isSearchable={true}/>
                </Grid>
                <Grid item xs={4}>
                    <Button className="quizButtons" variant="contained">Publish Quiz</Button>
                </Grid>
                <Grid item xs={2}>
                    <p>Existing Quiz Name</p>
                    <Select isSearchable={true} />
                </Grid>
                <Grid item xs={2}>
                    <p>Chapter</p>
                    <Select options={chapter}/>
                </Grid>
                <Grid item xs={2}>
                    <p>Level</p>
                    <Select options={level}/>
                </Grid>
                <Grid item xs={2}>
                    <p>Topic</p>
                    <Select isMulti options={topics} isSearchable={true}/>
                </Grid>
                <Grid item xs={4}>
                    <Button className="quizButtons" variant="contained">Update Quiz</Button>
                </Grid>
                <Grid item xs={2}>
                    <p>Class</p>
                    <Select isMulti isSearchable={true}/>
                </Grid>
                <Grid item xs={2}>
                    <p>Student</p>
                    <Select isMulti isSearchable={true}/>
                </Grid>
                <Grid item xs={2}>
                    <p>Starting Time</p>
                    <input className="quizInputs" type="date" name="StartDate" id="startDate" />
                </Grid>
                <Grid item xs={2}>
                    <p>Expire Time</p>
                    <input className="quizInputs" type="date" name="ExpireDate" id="expireDate" />
                </Grid>
                <Grid item xs={4}>
                    <Button className="quizButtons" variant="contained">Create Quiz</Button>
                </Grid>
            </Grid>
        </>
    );
};

const Ttemplates = () => {
    const templates = topics.map(topic =>(
        <TopicButton topic={topic}/>
    ));

    return(
        <>
            <div id="TopicsDiv">
                <h3 id="templateHeader">Topic Templates</h3>
                <Grid container spacing={3}>
                    {templates}
                </Grid>
            </div>
        </>
    );
};

const TopicButton = ({topic}) =>{
    const[isOpen,setIsOpen] = useState(true);
    const toggle = () => 
    {
        setIsOpen(!isOpen);
        topic.isSelected=!isOpen;
    }

    return(
        <Grid item xs={2}>
            <Button className="GridButton" variant="outlined" onClick={toggle} style={{backgroundColor: isOpen? "white" : "pink"}}>{topic.label}</Button>
        </Grid>      
    );
}

const Quizzes = () =>{
    return(
        <div>
            <h1 id="quizHeader">Quizzes</h1>
            <SelectBox />
            <Ttemplates />
        </div>
    )
}
export default Quizzes;