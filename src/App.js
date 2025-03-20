const gebi = (id) => {return document.getElementById(id)};
const {createRoot, render} = ReactDOM;
const {useRef} = React;

function App() {

    const {isMobile, isPortrait, isTouchDevice} = useDeviceInfo();


    return(
        <mdui-layout>
            <NavDrawer id="navDrawer"/>
            <Toolbar isMobile={isMobile} isPortrait={isPortrait} navDrawer="navDrawer"/>
            <mdui-layout-main style={{padding: "10px !important", width: "100", gap: "10px"}}>
                <div style={{padding: "5px"}}>
                    <BusinessNews isPortrait={isPortrait}/>
                    <Followers isPortrait={isPortrait}/>
                </div>

            </mdui-layout-main>
            <mdui-layout-item placement="right" style={{width: "40vw", padding: "5px", display: "block", flexDirection: "column", gap: "10px"}}>

                <PhotoAlbums length="2"/>
                <Videos />
                <MusicList />
            </mdui-layout-item>
        </mdui-layout>
    );
};

render(<App />, document.getElementById("root"));