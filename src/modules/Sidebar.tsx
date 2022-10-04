import React, {useState} from 'react';
import {List, ListItem, Drawer, ListItemIcon, ListItemText, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import GroupsIcon from '@mui/icons-material/Groups';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CommentIcon from '@mui/icons-material/Comment';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export function SideBar() {
    return(
        <>
            <Drawer variant="permanent">
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="Locations" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Teams" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PersonSearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="Players" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <AutoGraphIcon />
                        </ListItemIcon>
                        <ListItemText primary="Statistics" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CommentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Comment" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CloudUploadIcon />
                        </ListItemIcon>
                        <ListItemText primary="UploadVideo" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}