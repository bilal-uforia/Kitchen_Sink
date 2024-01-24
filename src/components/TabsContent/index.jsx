import SimpleContent from "./SimpleContent";
import ObjectContent from "./ObjectContent";
import CanvasContent from "./CanvasContent";

const TabsContent = ({ currentTab }) => {
    let tabContent = <h2>
        Please Select Tab
    </h2>

    switch (currentTab) {
        case 0:
            tabContent = <SimpleContent />;
            break;
        case 1:
            tabContent = <ObjectContent />;
            break;
        case 2:
            tabContent = <CanvasContent />;
            break;
        case 3:
            tabContent = <h2>Load SVG Content</h2>;
            break;
        case 4:
            tabContent = <h2>Execute Content</h2>;
            break;
        case 5:
            tabContent = <h2>JSON Content</h2>;
            break;
    }


    return (
        <div className="mt-[14px]">
            {tabContent}
        </div>
    )
}

export default TabsContent