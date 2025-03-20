const gebi = (id) => {return document.getElementById(id)};
const userName = "Michael Morgan";
 
function Toolbar(props){
    const openNavDrawer = e => {gebi(props.navDrawer).open = true};
    return (
        <mdui-top-app-bar variant="small">
            <mdui-button-icon icon="menu" onClick={openNavDrawer}></mdui-button-icon>
            <div style={{flexGrow: "1"}}></div>
            <ToolbarSearch />
            <div style={{flexGrow: "3"}}></div>

            &nbsp;
            <mdui-tooltip content={userName.toString()}>
                <mdui-avatar src="/assets/avatar_1.jpg" style={{float: "right"}}></mdui-avatar>
            </mdui-tooltip>
            <div style={{flexGrow: "1"}}></div>
            <mdui-top-app-bar-title>Michael Morgan</mdui-top-app-bar-title>
            <mdui-button-icon icon="notifications_bell" style={{float: "right"}}></mdui-button-icon>
        </mdui-top-app-bar>
    );
}