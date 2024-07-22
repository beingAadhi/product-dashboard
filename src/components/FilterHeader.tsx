import { Button, Typography } from "@mui/material";
import './FilterHeader.css';
import React from "react";

const FilterHeader: React.FC<{ onClear: () => void }> = ({ onClear }) => {
  return (
    <div className="header">
      <Typography variant="body1" component="span" className="heading">
        Filter
      </Typography>
      <Button className="clearFilter" size="small" onClick={onClear}>
        clear
      </Button>
    </div>
  );
};

export default React.memo(FilterHeader);
