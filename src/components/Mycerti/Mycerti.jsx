import React from 'react';
import './Mycerti.css';
import theme_pattern from '../../assets/theme_pattern.png';
import Certificates_data from '../../assets/Certificates_data'; // Correct data import

const Mycerti = () => {
  return (
    <div id='certificate' className="Certificates">
      <div className="Certificate-title">
        <h1>MY CERTIFICATES</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="certificates-container">
        {Certificates_data.map((certificate, index) => (
          <div
            key={index}
            className="certificate-format"
            style={{
              backgroundImage: `url(${certificate.c_image})`,
              backgroundSize: certificate.orientation === 'portrait' ? 'contain' : 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="certificate-content">
              <h3>{certificate.c_no}</h3>
              <h2>{certificate.c_name}</h2>
              <p>{certificate.c_desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mycerti;
