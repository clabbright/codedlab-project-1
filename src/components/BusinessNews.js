function BusinessNews(props){
    return (
        <mdui-card style={{width: "100%", height: "auto"}}>
            <img src="/assets/business_news.jpg" style={{height: "60%", width: "100%", objectFit: "cover"}}/>
            <mdui-list-item headline="Business News" description="Fresh business news" description-line="1">
                <mdui-avatar slot="icon">B</mdui-avatar>
                {
                    props.isPortrait ? <mdui-dropdown slot="end-icon">
                        
                          <mdui-button-icon icon="more_vert" slot="trigger"></mdui-button-icon>
                       
                        <mdui-menu>
                            <mdui-menu-item icon="chat_bubble">Write a message</mdui-menu-item>
                            <mdui-menu-item icon="person_add">Follow</mdui-menu-item>
                        </mdui-menu>
                    </mdui-dropdown> : <div slot="end-icon">
                        <mdui-button-icon icon="chat_bubble"></mdui-button-icon>
                        <mdui-button-icon icon="person_add"></mdui-button-icon>
                    </div>

                }
            </mdui-list-item>
        </mdui-card>
    )
}