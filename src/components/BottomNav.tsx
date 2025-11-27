'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: 'fixed', bottom: 0, left: 0, right: 0 }} display={{ md: 'none' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
        <BottomNavigationAction label="Friends" icon={<GroupIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}
