import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
          },
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const Accord = () => {
    const classes = useStyles();
    return (
        <div className="charter22">
            <div className="charter221">
                <h1>
                    Официальные документы
                </h1>
                <p>
                    Документы в виде копий и электронных документов (в части документов, самостоятельно разрабатываемых и утверждаемых образовательной организацией)
                </p>
            </div>
                <div className="">
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >

                            <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Устав КРАО 2017</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1vL8OBZL5gfwE-U00D-h4jVz_sw6FjOgP/view?usp=sharing">Устав КРАО</a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Аккредитация</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                                Аккредитация
                                <a href="http://krao.kg/wp-content/uploads/2021/02/SERTIFIKAT-N-VU180000176---kopiya-2.pdf">
                                    СЕРТИФИКАТ № VU180000176
                                </a>
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>   Правила внутреннего трудового распорядка для ППС, студентов и сотрудников КРАО(института) и Колледжа КРАО(института)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1AE18_cdaMxx-5m0VbA3BQUItEuHhvACg/view?usp=sharing">правила</a>
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Коллективный договор</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1qx5pmtxZuH0k7XgsE3wLGHBY4Morvxge/view?usp=sharing">Коллективный договор</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Лицензия на осуществление образовательной деятельности (с приложениями)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1iBfLfcKyLaPgNl4FLBG3i3xJ-ZPP0LQ-/view?usp=sharing">Лицензия</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Положение о приемной комиссии ОУ АНО ВО КРАО (институт)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1rWXcVyUSZDHje87wJsF_epAHrV0SKuLE/view?usp=sharing">Узнать больше</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="charter221">
                <h1>
                    Локальные нормативные акты
                </h1>
                <p>
                    Локальные нормативные акты по основным вопросам организации и осуществления образовательной деятельности.
                </p>
            </div>
            <div>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Правила приема на обучение по программе высшего образования в КРАО</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1Z1sG5dU3WZjn7C46Lv6X7mbVuDEbadfc/view?usp=sharing">Узнать больше</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Положение о проведении текущего контроля и промежуточной аттестации студентов НОУ ВПО КРАО (институт)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1Z1sG5dU3WZjn7C46Lv6X7mbVuDEbadfc/view?usp=sharing">Узнать больше</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}><InsertDriveFileIcon className="charter_icons"/>Положение о порядке перевода, отчисления и восстановления студентов НОУ ВПО КРАО (институт) </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <a href="https://drive.google.com/file/d/1Z1sG5dU3WZjn7C46Lv6X7mbVuDEbadfc/view?usp=sharing">Узнать больше</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Accord;
