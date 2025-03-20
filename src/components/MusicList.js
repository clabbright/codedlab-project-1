function MusicList(props) {
    return (
        <mdui-card style={{width: "100%", height: "300px", gap: "10px"}} clickable>
            <mdui-list>
                <mdui-list-subheader>Music</mdui-list-subheader>
                <mdui-list-item headline="Aurora" description="Running with you" icon="audiotrack" description-line="1"></mdui-list-item>
                <mdui-list-item headline="Aurora" description="Running with you" icon="audiotrack" description-line="1"></mdui-list-item>
                <mdui-list-item headline="Aurora" description="Running with you" icon="audiotrack" description-line="1"></mdui-list-item>
                <mdui-list-item headline="Aurora" description="Running with you" icon="audiotrack" description-line="1"></mdui-list-item>
            </mdui-list>
        </mdui-card>
    )
}