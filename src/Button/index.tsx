import React from 'react';
import MuiButton from "@material-ui/core/Button";

const Button: React.FC<{ label: string }> = ({ label }) => <MuiButton>{label}</MuiButton>

export default Button;