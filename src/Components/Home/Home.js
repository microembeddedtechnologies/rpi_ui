import React, { Component } from 'react';
import SideNav from '../sidenav';
import '../sidenav.css';
import DeviceManager from './DeviceManager';
import DataManager from './DataManager'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            sidebarNavList : [
                { label: "Favorites",       link: '#homenav1',  active : true},
                { label: "Devices",         link: '#homenav2',  active : false},
                { label: "Data",            link: '#homenav3',  active : false},
                { label: "Rules",           link: '#homenav4',  active : false},
                { label: "HomeNavItem5",    link: '#homenav5',  active : false},
            ],
            activeTab : 0
        }
    }

    sideTabClick=(e) => {
        this.state.sidebarNavList.map((item, index) => {
            index===e ? item.active = true : item.active = false;
            return(item)
        });
        this.setState({
            activeTab : e,
            render: true
        });
    }

    componentDidUpdate() {
        console.log('Component Did Update Home'); 
    }

    render() {
        console.log('render Home');
        let msg = '';
        switch(this.state.activeTab) {
            case 0 : msg = (<h2>Selected Nav Item 1</h2>);
                    break;
            case 1 : msg = (<DeviceManager />);
                    break;
            case 2 : msg = (<DataManager />);
                    break;
            case 3 : msg = (<h2>Selected Nav Item 4</h2>);
                    break;
            default: msg = (<h2>Selected Nav Item default</h2>);
                    break;
        }

        return(
            <div className='row'>
                <SideNav navlist={this.state.sidebarNavList} sideTabClick={this.sideTabClick}/>
                <div className='column column-page'>
                    {/* <h1 style={{paddingLeft:'50px'}}>This is Home Page</h1> */}
                    {msg}
                </div>
            </div>
        )
    }
}

export default Home;
