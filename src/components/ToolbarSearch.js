const style = {
    "--mdui-shape-corner-extra-small": "1.5rem",
    "--mdui-shape-corner-small": "1rem",
    "--mdui-shape-corner-medium": "1rem",
    "--mdui-shape-corner-large": "1rem",
    "--mdui-shape-corner-extra-large": "0.875rem",
    "height": "100%",
    "width": "40%"
};

function ToolbarSearch(){
    return (
       <mdui-text-field variant="outlined" icon="search" style={style} placeholder="Search..."></mdui-text-field>
    );
}