import SimpleContent from "./SimpleContent";

const TabsContent = ({ currentTab }) => {
    let tabContent = <h2>
        Please Select Tab
    </h2>

    switch (currentTab) {
        case 0:
            tabContent = <SimpleContent />;
            break;
        case 1:
            tabContent = <h2>Object Content</h2>;
            break;
        case 2:
            tabContent = <h2>Canvas Content</h2>;
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