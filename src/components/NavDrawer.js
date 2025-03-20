function NavDrawer(props) {
    return (
        <mdui-navigation-drawer close-on-overlay-click close-on-esc id={props.id}>
            <mdui-list>
                <mdui-list-item rounded headline="Randy Rogers" icon="account_circle" end-icon="edit"></mdui-list-item>
                <mdui-list-item rounded headline="News feed" icon="bookmark">
                    <mdui-badge slot="end-icon">13</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Messages" icon="message">
                    <mdui-badge slot="end-icon">5</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Events" icon="event">
                    <mdui-badge slot="end-icon">2</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Friends" icon="person">
                    <mdui-badge slot="end-icon">+3</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Groups" icon="group"></mdui-list-item>
                <mdui-list-item rounded headline="Photos" icon="photo"></mdui-list-item>
                <mdui-list-item rounded headline="Music" icon="library_music"></mdui-list-item>
                <mdui-list-item rounded headline="Videos" icon="featured_video"></mdui-list-item>
                <mdui-list-item rounded headline="Calendar" icon="event"></mdui-list-item>
                
                <mdui-divider></mdui-divider>

                <mdui-list-subheader>Favourites</mdui-list-subheader>

                <mdui-list-item rounded headline="Auto blogs" icon="group">
                    <mdui-badge slot="end-icon">+3</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Group pages" icon="group">
                    <mdui-badge slot="end-icon">+12</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Paul Singleton" icon="person"></mdui-list-item>
                <mdui-list-item rounded headline="Angel Coller" icon="person"></mdui-list-item>
                <mdui-list-item rounded headline="Isabella Rodriguez" icon="group">
                    <mdui-badge slot="end-icon">+1</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Design group" icon="group">
                    <mdui-badge slot="end-icon">+1</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Telescope" icon="group">
                    <mdui-badge slot="end-icon">+1</mdui-badge>
                </mdui-list-item>
                <mdui-list-item rounded headline="Travel and Nature" icon="group"></mdui-list-item>

                <mdui-divider></mdui-divider>

                <mdui-list-subheader>Create</mdui-list-subheader>
                <mdui-list-item rounded headline="Advertising" icon="advertising"></mdui-list-item>
                <mdui-list-item rounded headline="Public page" icon="group"></mdui-list-item>
            </mdui-list>
        </mdui-navigation-drawer>
    );
}