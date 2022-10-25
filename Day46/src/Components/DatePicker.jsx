// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import DateRangeIcon from "@mui/icons-material/DateRange";
// import { IconButton, InputAdornment, TextField } from "@mui/material";

// function DatePicker() {
//   const [value, setValue] = React.useState([null, null]);

//   const startInputRef = React.useRef();
//   const endInputRef = React.useRef();

//   return (
//     <>
//       <label>Date Picker</label>
//       <DateRangePicker
//         value={value}
//         InputAdornmentProps={DateRangeIcon}
//         components={{
//           OpenPickerIcon: DateRangeIcon,
//         }}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <React.Fragment>
//             <TextField
//               {...startProps}
//               inputRef={startInputRef}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => {
//                         startInputRef.current.focus();
//                       }}
//                     >
//                       <DateRangeIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField
//               {...endProps}
//               inputRef={endInputRef}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={() => {
//                         endInputRef.current.focus();
//                       }}
//                     >
//                       <DateRangeIcon />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </React.Fragment>
//         )}
//       />

//       <Box sx={{ display: "flex", flexDirection: "column" }}>
//         <DateRangePicker
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//           components={{
//             OpenPickerIcon: DateRangeIcon,
//           }}
//           renderInput={(startProps, endProps) => (
//             <React.Fragment>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   p: 1,
//                   borderRadius: 1,
//                   border: 1,
//                   width: 400,
//                 }}
//               >
//                 <input
//                   style={{ width: "150px" }}
//                   ref={startProps.inputRef}
//                   {...startProps.inputProps}
//                 />
//                 <Box sx={{ mx: 1 }}> - </Box>
//                 <input
//                   style={{ width: "150" }}
//                   ref={endProps.inputRef}
//                   {...endProps.inputProps}
//                 />
//               </Box>
//             </React.Fragment>
//           )}
//         />
//       </Box>
//     </>
//   );
// }

// export default DatePicker;

import * as React from "react";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { IconButton, InputAdornment } from "@mui/material";

function DatePicker() {
  const [value, setValue] = React.useState([null, null]);
  const startInputRef = React.useRef();
  return (
    <DateRangePicker
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                startInputRef.current.focus();
              }}
            >
              <DateRangeIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputAdornmentProps={{ position: "end" }}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  );
}

export default DatePicker;
