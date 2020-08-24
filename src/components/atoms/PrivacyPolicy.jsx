import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/components/atoms/PrivacyPolicy.scss';

const PrivacyPolicy = () => (
  <Link to="/privacypolicy" className="privacyPolicy">
    Politica de Privacidad
  </Link>
);

export default PrivacyPolicy;
