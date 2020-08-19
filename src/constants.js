import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ContactsIcon from '@material-ui/icons/Contacts';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

export const base_url = "";
export const drawerWidth = '240px';

export const getIcon = (icon) => {
    switch(icon) {
        case 'HomeIcon':
            return (<i className="ico icon-home"></i>);
        case 'ContactsIcon':
            return (<i className="ico icon-patient"></i>);
        case 'PlaylistAddCheckIcon':
            return (<PlaylistAddCheckIcon/>);
        case 'PeopleAltIcon':
            return (<PeopleAltIcon/>);
        case 'ScheduleIcon':
            return (<ScheduleIcon/>);
        case 'FileCopyIcon':
            return (<FileCopyIcon/>);
        case 'PaymentIcon':
            return (<PaymentIcon/>);
        case 'AccountTreeIcon':
            return (<AccountTreeIcon/>);
      default:
        return ('');
    }
}



/** Menu list  */
export const menuList = [
    {
        key: 'dashboard',
        name: 'Dashboard',
        route: '/',
        icon: 'icon-home',
        divider: false,
        submenu: []
    },
    {
        key: 'patients',
        name: 'Patients',
        route: '/patients',
        icon: 'ico icon-patient',
        divider: false,
        submenu: []
    },
    {
        key: 'appointments',
        name: 'Appointments',
        route: '/appointments',
        icon: 'ico icon-appointment',
        divider: true,
        submenu: []
    },
    {
        key: 'laboratory',
        name: 'Laboratory',
        route: '/laboratory',
        icon: 'ico icon-laboratory',
        divider: false,
        submenu: []/* [
            {
                key: 'allappointments',
                name: 'All Appointments',
                route: '/appointments/all',
                icon: 'PlaylistAddCheckIcon'
            },
            {
                key: 'addappointments',
                name: 'Add Appointments',
                route: '/appointments/add',
                icon: 'PlaylistAddCheckIcon'
            },
        ] */
    },
    {
        key: 'radiology',
        name: 'Radiology',
        route: '/radiology',
        icon: 'ico icon-x-ray',
        divider: false,
        submenu: []
    },
    {
        key: 'pharmacy',
        name: 'Pharmacy',
        route: '/pharmacy',
        icon: 'ico icon-medicine',
        divider: true,
        submenu: []
    },
    {
        key: 'patient-pool',
        name: 'Patient pool',
        route: '/patient-pool',
        icon: 'ico icon-data-collection',
        divider: false,
        submenu: []
    },
    {
        key: 'ward',
        name: 'Ward management',
        route: '/ward',
        icon: 'ico icon-hospital',
        divider: false,
        submenu: []
    },
    {
        key: 'billing',
        name: 'Billing management',
        route: '/billing',
        icon: 'ico icon-invoice',
        divider: true,
        submenu: []
    },
    {
        key: 'staff',
        name: 'Staff management',
        route: '/staff',
        icon: 'ico icon-id-card',
        divider: false,
        submenu: []
    },
]