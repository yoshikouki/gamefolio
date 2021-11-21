import {BottomNavigation as BottomNavigationMui, BottomNavigationAction, Link} from "@mui/material";
import {Favorite, Home} from "@mui/icons-material";
import React from "react";
import {styled} from "@mui/system";

const TopNavigation = () => {
  return (
    <Header>
      <Link
        href='/'
        component='h1'
        variant='h3'
        underline='hover'
      >
        G
      </Link>
    </Header>
  )
}

const Header = styled('header')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '1em',
})

export default TopNavigation