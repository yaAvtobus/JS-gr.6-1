import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import BookOutlined from '@mui/icons-material/BookOutlined';

//Панель навигации с кнопками: "Книжечка", "Календарь", "Все задания"
//Книжечка отправляет на страницу /
//Календарь на /Calendar (scheduler/src/routes/Calendar)
//Все задания на /AllTasks (scheduler/src/routes/AllTasks)

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            href="/"
            sx={{ mr: 2 }}
          >
            <BookOutlined />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ mr: 3}}>
            Ежедневник
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='Calendar'
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/Calendar"
              >
                Календарь
              </Button>
              <Button
                key='AllTasks'
                sx={{ my: 2, color: 'white', display: 'block' }}
                href="/AllTasks"
              >
                Все задачи
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}