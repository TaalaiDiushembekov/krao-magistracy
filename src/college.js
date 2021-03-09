import React from 'react';
import news_bg from "./images/college_images/Студенческое сообщество (1).jpg";
import college_bg from "./images/college_images/Tint.png"
import license from "./images/college_images/колледж1.jpg";
import charter from "./images/college_images/колледж3.jpg";
import address from "./images/college_images/здание для главной станицы.png"
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {makeStyles} from "@material-ui/core/styles";

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

}));

const College = () => {
    const classes = useStyles();
    return (
        <div className="college">
            <div  className="college_bg" >
                <img className="college_img" src={news_bg} alt=""/>
                <div className="college_container" >
                    <div ><img className="college_bg_img" src={college_bg}/></div>
                    <div  className="college_title">
                        <h1>
                            Колледж КРАО
                        </h1>
                    </div>
                </div>
            </div>
            <div className="college_address">
                <div  className="college_address_img">
                    <img src={address}/>
                    <h2>Колледж КРАО</h2>
                </div>
                <div className="college_address_img">
                    <h2>Контакты:</h2>
                    <p> 720009, Кыргызская Республика, г.Бишкек, ул.Л.Толстого 210
                    </p>
                </div>
            </div>
            <div className="college222">
                <h1>Лицензия и устав</h1>
                <div className="college223">
                    <div className="college224">
                        <img src={license} alt=""/>
                        <p><a href="https://drive.google.com/file/d/1r3cj-dzmlIVXQnL-eTrKEed2zxqEzx2l/view?usp=sharing">Лицензия на право <br/>ведения образовательной<br/> деятельности</a></p>
                    </div>
                    <div className="college225">
                        <img src={charter} alt=""/>
                        <p><a href="https://drive.google.com/file/d/1CnipOvuHuVAixHjK_kRL4PDYnXTCpkEm/view?usp=sharing">Устав колледжа КРАО</a></p>
                    </div>
                </div>
            </div>
            <div className="college20">
                <h1>Документы</h1>
                  <div className="college21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="college_icons"/>Нормативно-правовая документация</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/10Izlhq34a5CLBI_wq0SUYGsQ5UC8BdAe/view?usp=sharing">Положение о взаимопосещении занятий преподавателей Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-RgbhIefUkAVpvlnIWNimpGoDnXR4OVh/view?usp=sharing">Положение о Колледже КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/10JClAZ9rNdoFshQfzg2O2fle0V-5VeXu/view?usp=sharing">Положение о порядке перевода, восстановления, отчисления и предоставления академических отпусков учащимся Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-w3dEGpVzO2fRdtG0-E6Mx-wmz5gMSVM/view?usp=sharing">Положение о производственной практике учащихся Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/10e5OC-Sjt3roYydsptkJFJ67iYMa-_wX/view?usp=sharing">Положение о приемной комиссии Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-sIgPQzmGBO9kNq7kzDFotKuiVaqh1PW/view?usp=sharing">Положение о работе куратора Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-xENsGwXz1LxOTeGA3u9sIBl4MnamcQt/view?usp=sharing">Положение о переводных и семестровых экзаменах Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-jMTvlSqPWmy2CA3uoYtHm8PtY_1gvzb/view?usp=sharing">Положение о студенческом Совете Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/10Uk_ePAp25aU3TK947MEMvlmJlpM3CoX/view?usp=sharing">Положение об итоговой государственной аттестации выпускников Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-2vVaBOnb-yOcoA_Wd3wqX4HpF74BAwG/view?usp=sharing">Правила внутренного трудового распоряка для ППС и сотрудников Колледжа КРАО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1-2A4oJeX-FNcBIXMi-2SHYCOszBlJGYJ/view?usp=sharing">Правила внутренного трудового распоряка для учащихся Колледжа КРАО</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                  <div className="college21">
                                <Accordion>
                                    <AccordionSummary
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >

                                        <Typography className={classes.heading}><InsertDriveFileIcon className="college_icons"/>Образовательные стандарты</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <a href="https://drive.google.com/file/d/1MQhOlsni1hWQ9mdTkyDPZzee40ZJxYHe/view?usp=sharing">Стандарт Банковское дело</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1qDqdWR9utszaQB4RYui3TWWKqlCPkGdh/view?usp=sharing">Стандарт ДО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/18XkwKd2634ggGC7Zo6buxiLQU65nJfSu/view?usp=sharing">Стандарт Менеджмент</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1zsm4eGBLnZvafj-O0U3wuoTZ4TszWDf3/view?usp=sharing">Стандарт Налоги</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1oD_K4ESgZHxrN_GEjG0nMTnsLk2YozJk/view?usp=sharing">Стандарт ПНК</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1dxeWgtiZe5mzOylHEk-M3195UJy-6HxV/view?usp=sharing">Стандарт ПОВТ и АС</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1moAmyCVEGU49z10MlBFhTMBGvo5qAy6U/view?usp=sharing">Стандарт ПОСО</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/10H_GfZxYQKj93MhDnAIx2w9amAo_LpV-/view?usp=sharing">Стандарт Правоведение</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1_gxiTP_qM380M9j3_eMCq7WLE0_cbkwV/view?usp=sharing">Стандарт ТОК</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/13KPTWleFyqO0hwp-moPC_3bcJuKJcbOr/view?usp=sharing">Стандарт Туризм</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1B-dmWKFaSz3u7EPYSAdCJ-1eNEL-WlxW/view?usp=sharing">Стандарт Финансы</a>
                                            <br/>
                                            <a href="https://drive.google.com/file/d/1dH01YPNf1O0YlhMpAQ5255ZL2wPzYvRH/view?usp=sharing">Стандарт Экономика и бухг.учет</a>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
            </div>
        </div>
    );
};

export default College;
