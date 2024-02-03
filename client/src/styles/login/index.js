import { Box, Button, TextField, Typography } from "@mui/material";
import {styled} from "@mui/system";
import { colors } from "../theme";
import "@fontsource/montez"
import "@fontsource/orbitron"
import '@fontsource/caveat-brush'

export const FormContainer=styled(Box)(()=>({
  width:'100%',
  height:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  background:colors.secondary
}))

export const FormBox=styled(Box)(()=>({
  // box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  boxShadow: `${colors.primary} 0px 3px 3px 0px` ,
  width:'40%',
  background:colors.gray,
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  // boxShadow:`3px 2px 15px 1px ${colors.primary},-3px -2px 15px 1px ${colors.primary}`
}))

export const FormTitle=styled(Typography)(()=>({
  fontWeight:600,
  fontSize:'50px',
  color:colors.primary,
  // color:'red',
  fontFamily:'"montez","cursive"',
  margin:10
})) 

export const InputItem=styled(TextField)(({theme})=>({
  marginTop:15,
  width:'80%'
}))

export const FormButton=styled(Button)(()=>({
  width:'80%',
  background:colors.primary,
  marginTop:15
}))

export const AppbarHeader=styled(Typography)(()=>({
  padding:'4px',
  flexGrow:1,
  fontSize:'4em',
  fontFamily:"'Montez','cursive'",
  color:colors.secondary
}))