import {BottomNavigation as BottomNavigationMui, BottomNavigationAction, Paper} from "@mui/material";
import {Home, Person} from "@mui/icons-material";
import React, {SyntheticEvent, useState} from "react";
import {useRouter} from "next/router";
import {styled} from "@mui/system";

const BottomNavigation = () => {
  const router = useRouter()
  const [value, setValue] = useState('');
  const handleChange = async (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
    await router.push(newValue)
  }
  return (
    <ExPaper elevation={3}>
      <BottomNavigationMui
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" value='/' icon={<Home/>}/>
        <BottomNavigationAction label="Users" value='/users' icon={<Person/>}/>
      </BottomNavigationMui>
    </ExPaper>)
}

const ExPaper = styled(Paper)({
    position: 'fixed', bottom: 0, left: 0, right: 0
  }
)

export default BottomNavigation