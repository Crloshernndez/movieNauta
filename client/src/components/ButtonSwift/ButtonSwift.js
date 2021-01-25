import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import GridOnIcon from "@material-ui/icons/GridOn";

function ButtonSwift({ handleClick }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="Grid"
            control={<Switch onClick={handleClick} color="primary" />}
            label={<GridOnIcon />}
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default ButtonSwift;
