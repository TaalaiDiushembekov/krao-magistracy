import React from 'react';
import license from '../src/images/license_images/license.jpg'
import accreditation from '../src/images/license_images/accreditation.jpg'
import charter from '../src/images/license_images/charter.jpg'

const License = () => {
    return (
        <div className="license222">
            <h1>Лицензии и сертификаты</h1>
            <div className="license223">
                <div className="license224">
                    <img src={license} alt=""/>
                    <p><a href="https://drive.google.com/file/d/1iBfLfcKyLaPgNl4FLBG3i3xJ-ZPP0LQ-/view?usp=sharing">Лицензия на право <br/>ведения образовательной<br/> деятельности</a></p>
                </div>
                <div className="license224">
                    <img src={accreditation} alt=""/>
                    <p><a href="">Свидетельство <br/> о государственной аккредитации</a></p>
                </div>
                <div className="license225">
                    <img src={charter} alt=""/>
                    <p><a href="https://drive.google.com/file/d/1vL8OBZL5gfwE-U00D-h4jVz_sw6FjOgP/view?usp=sharing">Устав КРАО</a></p>
                </div>
            </div>
        </div>
    );
};

export default License;
