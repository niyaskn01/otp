import { createTheme } from "@mui/material"

export const colors={
  primary:'#0e1ce8',
  secondary:'#b8d1bd',
  gray:'#e6f5e9',
  white:'#fff'
}

export const theme=createTheme({
  palette:{
    primary:{
      main:colors.primary,
    },
    secondary:{
      main:colors.secondary
    },
    gray:{
      main:colors.gray
    },
    white:{
      main:colors.white
    }
  },
  components:{
    MuiButton:{
      defaultProps:{
        // disableElevation:true,
        disableRipple:true
      }
    }
  }
})