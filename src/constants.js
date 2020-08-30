import React from 'react';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AirlineSeatIndividualSuiteOutlinedIcon from '@material-ui/icons/AirlineSeatIndividualSuiteOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import FlipOutlinedIcon from '@material-ui/icons/FlipOutlined';
import LocalPharmacyOutlinedIcon from '@material-ui/icons/LocalPharmacyOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import VerticalSplitOutlinedIcon from '@material-ui/icons/VerticalSplitOutlined';

export const base_url = "";
export const drawerWidth = '240px';

export const getIcon = (icon) => {
    switch(icon) {
        case 'home':
            //return (<i className="ico icon-home"></i>);
            return <HomeOutlinedIcon/>;
        case 'patients':
            return (<AirlineSeatIndividualSuiteOutlinedIcon/>);
        case 'appointments':
            return (<DateRangeOutlinedIcon/>);
        case 'laboratory':
            return (<GroupWorkOutlinedIcon/>);
        case 'radiology':
            return (<FlipOutlinedIcon/>);
        case 'pharmacy':
            return (<LocalPharmacyOutlinedIcon/>);
        case 'pool':
            return (<MeetingRoomOutlinedIcon/>);
        case 'ward':
            return (<AssignmentIndOutlinedIcon/>);
        case 'billing':
            return (<ReceiptOutlinedIcon/>);
        case 'staff':
            return (<PersonPinOutlinedIcon/>);
        case 'forms':
            return (<VerticalSplitOutlinedIcon/>);
      default:
        return ('');
    }
}



/** Menu list  */
export const menuList = [
    {
        key: 'dashboard',
        name: 'Dashboard',
        route: '/admin/dashboard',
        icon: getIcon('home'),//'icon-home',
        divider: false,
        submenu: []
    },
    {
        key: 'patients',
        name: 'Patients',
        route: '/admin/patients',
        icon: getIcon('patients'),//'ico icon-patient',
        divider: false,
        submenu: []
    },
    {
        key: 'appointments',
        name: 'Appointments',
        route: '/admin/appointments',
        icon: getIcon('appointments'),//'ico icon-appointment',
        divider: true,
        submenu: []
    },
    {
        key: 'laboratory',
        name: 'Laboratory',
        route: '/admin/laboratory',
        icon: getIcon('laboratory'),//'ico icon-laboratory',
        divider: false,
        submenu: []/* [
            {
                key: 'allappointments',
                name: 'All Appointments',
                route: '/admin/appointments/all',
                icon: 'PlaylistAddCheckIcon'
            },
            {
                key: 'addappointments',
                name: 'Add Appointments',
                route: '/admin/appointments/add',
                icon: 'PlaylistAddCheckIcon'
            },
        ] */
    },
    {
        key: 'radiology',
        name: 'Radiology',
        route: '/admin/radiology',
        icon: getIcon('radiology'),//'ico icon-x-ray',
        divider: false,
        submenu: []
    },
    {
        key: 'pharmacy',
        name: 'Pharmacy',
        route: '/admin/pharmacy',
        icon: getIcon('pharmacy'),//'ico icon-medicine',
        divider: true,
        submenu: []
    },
    {
        key: 'patient-pool',
        name: 'Patient pool',
        route: '/admin/patient-pool',
        icon: getIcon('pool'),//'ico icon-data-collection',
        divider: false,
        submenu: []
    },
    {
        key: 'ward',
        name: 'Ward management',
        route: '/admin/ward',
        icon: getIcon('ward'),//'ico icon-hospital',
        divider: false,
        submenu: []
    },
    {
        key: 'billing',
        name: 'Billing management',
        route: '/admin/billing',
        icon: getIcon('billing'),//'ico icon-invoice',
        divider: true,
        submenu: []
    },
    {
        key: 'staff',
        name: 'Staff management',
        route: '/admin/staff',
        icon: getIcon('staff'),//'ico icon-id-card',
        divider: false,
        submenu: []
    },
    {
        key: 'forms',
        name: 'Forms',
        route: '/admin/forms',
        icon: getIcon('forms'),//'ico icon-id-card',
        divider: false,
        submenu: []
    },
]