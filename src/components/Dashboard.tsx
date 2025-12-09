'use client' // ต้องเป็น Client Component เพื่อใช้ useState

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Sidebar, DrawerHeader } from './Sidebar'; // Import Sidebar เดิมมา
import { BottomNav } from './BottomNav';

const drawerWidth = 240;

// สร้าง Main Component ที่ขยับได้ ตามโค้ดที่คุณแปะมา
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    // จุดสำคัญ: ถ้าปิด Sidebar ให้ขยับซ้ายลบไปเท่าความกว้าง Drawer
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0, // ถ้าเปิด Sidebar ให้กลับมาที่เดิม
    }),
}));

export default function Dashboard({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(true); // เก็บ State ไว้ที่นี่!

    // ฟังก์ชันสลับสถานะ (ส่งไปให้ Sidebar ใช้)
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>

            {/* ส่ง open และ toggleDrawer ไปให้ Sidebar */}
            <Sidebar open={open} toggleDrawer={toggleDrawer} />

            {/* Main รับรู้ state open แล้วขยับตาม */}
            <Main open={open}>
                {/*<DrawerHeader /> ดันเนื้อหาลงมาจาก AppBar */}
                {children}
            </Main>

            {/* Mobile Nav แยกต่างหาก หรือจะซ่อนเมื่อ Desktop ก็ได้ */}
            <div className="md:hidden">
                <BottomNav />
            </div>
        </Box>
    );
}