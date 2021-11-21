import {BottomNavigation as BottomNavigationMui, BottomNavigationAction} from "@mui/material";
import {Favorite, Home} from "@mui/icons-material";
import React from "react";

const BottomNavigation = () => {
  const [value, setValue] = React.useState('home');
  const handleChange = (event: any, newValue: React.SetStateAction<string>) => {
    setValue(newValue);
  }
  return (
    <BottomNavigationMui sx={{width: 500}} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label='Home'
        value='home'
        icon={<Home/>}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<Favorite/>}
      />
    </BottomNavigationMui>
  )
}

export default BottomNavigation