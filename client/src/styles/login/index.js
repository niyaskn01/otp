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

export const FormBox=styled(Box)(({theme})=>({
  boxShadow: `${colors.primary} 0px 3px 3px 0px` ,
  width:'40%',
  background:colors.gray,
  display:'flex',
  alignItems:'center',
  flexDirection:'column',
  [theme.breakpoints.down('md')]:{
    width:'90%'
  }
}))

export const FormTitle=styled(Typography)(({theme})=>({
  fontWeight:600,
  fontSize:'50px',
  color:colors.primary,
  fontFamily:'"montez","cursive"',
  margin:10,
  [theme.breakpoints.down('md')]:{
    fontSize:'25px',
  }
})) 

export const InputItem=styled(TextField)(({theme})=>({
  marginTop:15,
  width:'80%',
  [theme.breakpoints.down('md')]:{
    marginTop:5,
  }
}))

export const FormButton=styled(Button)(()=>({
  width:'80%',
  background:colors.primary,
  marginTop:15
}))

export const AppbarHeader=styled(Typography)(({theme})=>({
  padding:'4px',
  flexGrow:1,
  fontSize:'4em',
  fontFamily:"'Montez','cursive'",
  color:colors.secondary,
  [theme.breakpoints.down('md')]:{
    fontSize:'3em',
  }
}))