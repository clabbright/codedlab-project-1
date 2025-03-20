function PhotoAlbum(props){
    const divStyle={
        height: "40%",
        width: "100%",
        objectFit: "cover",
        position: "relative",
        backgroundImage: "url('" + props.src + "')",
        backgroundSize: "100%",
        borderBottom: "2px solid #fff"
    };

    const badgeStyle = {
        position: "absolute",
        right: "5%",
        bottom: "25%"
    }
    
    const h6Style = {
        position: "absolute",
        left: "5%",
        bottom: "2.5%",
        color: "white"
    }

    return (
        <div style={divStyle}>

            <h6 style={h6Style}>{props.text}</h6>
            <mdui-badge style={badgeStyle}>24</mdui-badge>
        </div>
    )
}
function PhotoAlbums(props){
    const style={
        height: "40%",
        width: "100%",
        objectFit: "cover"

    };
    return (
        <mdui-card style={{width: "100%", height: "200px", gap: "10px", marginBottom: "7.5px"}} clickable>
            <div style={{padding: "15px", fontSize: "0.75rem", fontWeight: "bold"}}>
                <div>Photo Albums {props.length}</div>

            </div>
            <PhotoAlbum src="/assets/photo_album_1.jpg" text="My photos"/>
            
            <PhotoAlbum src="/assets/photo_album_2.jpg" text="Beautiful world"/>
        </mdui-card>
    );
}