function Follower(props){
    return (
        <div className="mdui-col" style={{padding: "5px"}}>
            <div style={{display: "block"}}>
                <mdui-avatar></mdui-avatar>
                <div style={{fontSize: "small", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>{props.name}</div>
            </div>
        </div>
    )
}

function Followers(props){
    return (
        <mdui-card style={{height: "auto", width: "100%"}} clickable>
            <div style={{padding: "10px", fontSize: "0.75rem", fontWeight: "bold"}}>
                <div>Followers {props.length}</div>
            </div>
            <div className={props.isPortrait ? "mdui-row-xs-4" : "mdui-row-xs-6"} style={{padding: "10px"}}>
                <Follower name="follower 1"/>
                <Follower name="follower 2"/>
                <Follower name="follower 3"/>
                <Follower name="follower 4"/>
                <Follower name="follower 5"/>
            </div>
        </mdui-card>
    )
}