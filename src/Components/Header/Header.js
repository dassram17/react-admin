import React from 'react';

import { AppBar, Toolbar, IconButton,Typography, Box } from '@material-ui/core';
import SimpleLineIcon from 'react-simple-line-icons';
import theme from '../../ui/Theme/Theme';

const Header = (props) => {
    
    return(
        <React.Fragment>
            <AppBar  color="default" position="fixed" style={{zIndex: theme.zIndex.drawer + 1,}} elevation={0}>
                <Toolbar style={{backgroundColor:'#fff'}}>
                  <Box display="flex" flexDirection="row" justifyContent="space-between" style={{width:'100%'}}>
                    <Typography variant="h6" noWrap>
                      LOGO
                    </Typography>
                    <Box component="div">
                      <IconButton>
                        <SimpleLineIcon name="bell" />
                      </IconButton>
                      <IconButton>
                        <SimpleLineIcon name="settings" />
                      </IconButton>
                      <IconButton onClick={props.logoutClick}>
                        <SimpleLineIcon name="logout" />
                      </IconButton>
                    </Box>
                  </Box>
                  
                </Toolbar>
              </AppBar>
        </React.Fragment>
    )
}

export default Header;