import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AccordionDetails from "@material-ui/core/AccordionDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Timetable = () => {
    const classes = useStyles();
    return (
        <div className="timetable">
            <h1>Расписание учебных занятий</h1>
            <div className="timetable2">
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >

                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Очная форма</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://docs.google.com/spreadsheets/d/1G3okZw0exTVRmmicCAlyULfNLUbUEeuI_Lr-WLIpHnE/edit?usp=sharing">Расписание учебных занятий студентов 1 курса очной формы обучения</a>
                            <br/>
                            <a href="https://docs.google.com/spreadsheets/d/1B6qZ_ZpioGfKZ_DpZP1dqHQzB12_01wlyfrl7sZtVrM/edit?usp=sharing">Расписание учебных занятий студентов 2 курса очной формы обучения</a>
                            <br/>
                            <a href="https://docs.google.com/spreadsheets/d/152lrAmNc-5hrhpKPvylOi0xNjVuHiJWzkjwDnkH8e8I/edit?usp=sharing">Расписание учебных занятий студентов 3 курса очной формы обучения</a>
                            <br/>
                            <a href="https://docs.google.com/spreadsheets/d/1AojqN9xRcVb2zBRzcnnfGlNDaZbL3fusrgASLvZsNHM/edit?usp=sharing">Расписание учебных занятий студентов 4 курса очной формы обучения</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="timetable3">
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >

                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Заочная форма</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://docs.google.com/spreadsheets/d/1Ry_GszkuuOmLsd6yPBT6p1eXaF7xf1qEsfO607c9UIA/edit?usp=sharing">Расписание учебных занятий студентов 1 курса заочной формы обучения формы обучения</a>
                            <br/>
                            <a href="https://drive.google.com/file/d/1YZVW_755B9mgQQMEsjv2o_Dy-vPhAf9T/view?usp=sharing">Расписание учебных занятий студентов 2 курса заочной формы обучения формы обучения</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Timetable;
