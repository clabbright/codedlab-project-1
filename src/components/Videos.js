function Video(props){
    return (
        <mdui-card style={{height: props.height ? props.height : "40%", width: props.width ? "100%" : props.width, padding: "0"}}>
            <video src={props.src} autoplay muted style={{height: "100%", width: "100%"}}></video>
        </mdui-card>
    )
}

function Videos(props){
    return (
        <mdui-card style={{width: "100%", height: "300px", gap: "10px", display: "flex", flexDirection: "column", marginBottom: "7.5px"}} clickable>
            <div style={{padding: "10px", fontSize: "0.75rem", fontWeight: "bold"}}>
                <div>Videos {props.length}</div>
            </div>
            <Video src="/assets/video_1.mp4" />
            <div style={{display: "flex", flexDirection: "row", height: "50%", justifyContent: "space-around", gap: "5px", padding: "0 5px 5px 5px"}}>
                <div style={{display: "flex", flexDirection: "column", height: "100%", width: "75%", gap: "5px"}}>
                    <Video src="/assets/video_2.mp4" height="50%" />
                    <Video src="/assets/video_1.mp4" height="50%" />
                </div>
                <Video src="/assets/video_2.mp4" height="100%" width="60%"/>
            </div>
        </mdui-card>
    )
}