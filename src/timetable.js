import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import SchoolIcon from '@material-ui/icons/School'



import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import img_1 from '../src/images/students_images/Активная деятельность студентов.jpg'
import img_2 from '../src/images/students_images/Благотворительная ярмарка .jpg'
import img_3 from '../src/images/students_images/В библиотеке КРАО..JPG'
import img_4 from '../src/images/students_images/Вместе на субботнике.jpg'
import img_5 from '../src/images/students_images/День донора..JPG'
import img_6 from '../src/images/students_images/День донора.JPG'
import img_7 from '../src/images/students_images/День здоровья.JPG'
import img_8 from '../src/images/students_images/День китайской культуры..jpg'
import img_9 from '../src/images/students_images/День китайской культуры. (1).jpg'
import img_10 from '../src/images/students_images/День памяти предков и истории.JPG'
import img_11 from '../src/images/students_images/День студентов.JPG'
import img_12 from '../src/images/students_images/Знание объединяет народы .jpg'
import img_13 from '../src/images/students_images/Подготовка подарков для детей детского дома..JPG'
import img_14 from '../src/images/students_images/Подшефный дом престарелых.JPG'
import img_15 from '../src/images/students_images/Познавательный проект _Кыргызстан - страна гор_.jpg'
import img_16 from '../src/images/students_images/Посвящение в студенты.JPG'
import img_17 from '../src/images/students_images/Посещение детской SOS - деревни в г. Чолпон - Ата.jpg'
import img_18 from '../src/images/students_images/Празднование восточного Нового года.jpg'
import img_19 from '../src/images/students_images/Празднование дня пожилых..JPG'
import img_20 from '../src/images/students_images/Проект _Чистая среда_.jpg'
import img_21 from '../src/images/students_images/Психологический тренинг.JPG'
import img_22 from '../src/images/students_images/Студенческое сообщество.jpg'
import img_23 from '../src/images/students_images/Экологическая деятельность студентов.jpg'
const tutorialSteps = [
    {
        label: 'Активная деятельность студентов',
        src: img_1,
    },
    {
        label: 'Благотворительная ярмарка',
        src: img_2,
    },
    {
        label: 'В библиотеке КРАО',
        src: img_3,
    },
    {
        label: 'Вместе на субботнике',
        src: img_4,
    },
    {
        label: 'День донора',
        src: img_5,
    },
    {
        label: 'День донора',
        src: img_6,
    },
    {
        label: 'День здоровья',
        src: img_7,
    },
    {
        label: 'День китайской культуры',
        src: img_8,
    },
    {
        label: 'День китайской культуры',
        src: img_9,
    },
    {
        label: 'День памяти предков и истории',
        src: img_10,
    },
    {
        label: 'День студентов',
        src: img_11,
    },
    {
        label: 'Знание объединяет народы',
        src: img_12,
    },
    {
        label: 'Подготовка подарков для детей детского дома',
        src: img_13,
    },
    {
        label: 'Подшефный дом престарелых',
        src: img_14,
    },
    {
        label: 'Познавательный проект _Кыргызстан - страна гор',
        src: img_15,
    },
    {
        label: 'Посвящение в студенты',
        src: img_16,
    },
    {
        label: 'Посещение детской SOS - деревни в г. Чолпон - Ата',
        src: img_17,
    },
    {
        label: 'Празднование восточного Нового года',
        src: img_18,
    },
    {
        label: 'Празднование дня пожилых',
        src: img_19,
    },
    {
        label: 'Проект _Чистая среда',
        src: img_20,
    },
    {
        label: 'Психологический тренинг',
        src: img_21,
    },
    {
        label: 'Студенческое сообщество',
        src: img_22,
    },
    {
        label: 'Экологическая деятельность студентов',
        src: img_23,
    },

];



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        flexGrow: 1,
        maxWidth: 400,
    },
    heading: {
        fontSize: theme.typography.pxToRem(24),
        fontWeight: theme.typography.fontWeightRegular,
    },
    media: {
        height: 140,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
}));






const Timetable = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className="timetable">
            <h1><SchoolIcon className="school_icon"/>Студенту</h1>
            <div className="timetable20">
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >

                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Расписание</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="timetable21">
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
                            <div className="timetable21">
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
                            <div className="timetable21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>График индивидуальных онлайн консультаций</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/1WXhYIm1ZeqqUjnw9F4bNScLKr5CV434-/view?usp=sharing">Узнать больше</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="timetable21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>График приема академической задолженности</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/1JucHumYjaFbHOh5pjGOO6BHH5RYKB8P8/view?usp=sharing">Узнать больше</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="timetable21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>График проведение практик</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/1v8yZyRF8lbCr0cn8X7qLB0McE_iEAvJP/view?usp=sharing">Узнать больше</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="timetable21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>График работы структурных подразделений КРАО</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/1amMfBY4J5WaFjDXryrO-DBkMC3U73DsK/view?usp=sharing">Узнать больше</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="timetable21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Организация образовательного процесса 2020-2021 учебный год</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/1dcs8HUsiQ0yqG_fLGbOAFWLPV--RkwMs/view?usp=sharing">Узнать больше</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="timetable30">
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >

                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Студенческие объединение</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="timetable31">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Деятельность студенческого сообщества</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>

                                        <Typography>
                                            <div className={classes.root}>
                                                <Paper square elevation={0} className={classes.header}>
                                                    <Typography>{tutorialSteps[activeStep].label}</Typography>
                                                </Paper>
                                                <img
                                                    className={classes.img}
                                                    src={tutorialSteps[activeStep].src}
                                                    alt={tutorialSteps[activeStep].label}
                                                />
                                                <MobileStepper
                                                    steps={maxSteps}
                                                    position="static"
                                                    variant="text"
                                                    activeStep={activeStep}
                                                    nextButton={
                                                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                                            Next
                                                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                                        </Button>
                                                    }
                                                    backButton={
                                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                                            Back
                                                        </Button>
                                                    }
                                                />
                                            </div>

                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <div className="timetable31">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Студенческий совет</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/13JIGxL9GP12XKEUx21stTyB0GH6kxLLq/view?usp=sharing">нормативные, правовые докуманты для студентов</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1pzM2pwsdVBGR15g3z9eKNhKpNatvMK1j/view?usp=sharing">положение студсовета</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1FVVX-dpBUujI4d1nHv1PVLVE45RtdaoN/view?usp=sharing">состав студ совета</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className="timetable40">
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >

                        <Typography className={classes.heading}><InsertDriveFileIcon className="timetable_icons"/>Центр карьерного роста</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="timetable41">
                              <a href="https://drive.google.com/file/d/1HHKGdOdnmVLMmeRJbKNLJ2CYiHnmG5pf/view?usp=sharing">Образец резюме</a>
                              <br/>
                              <a href="https://drive.google.com/file/d/1EW78EQ0PsqF8tOvLFuQqRW7wP98BTitP/view?usp=sharing">Центр карьерного роста</a>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Timetable;
