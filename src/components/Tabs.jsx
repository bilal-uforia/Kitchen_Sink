import { useState } from "react"
import TabsContent from "./TabsContent";

// Tab Component
const Tab = ({ tabValue, currentTab, children, setTabIndex }) => {

    const isActive = tabValue === currentTab;
    return <button className={`text-center ${isActive ? "text-[#000000]" : "text-[#0088cc]"} 
     ${isActive ? "cursor-default border-solid border-[1px] border-b-0"
            : "hover:text-[#005580] hover:bg-[#eeeeee] cursor-pointer border-solid border-b-[1px]"}
     px-3 py-[8px]  rounded-tl-[4px] border-[#ddd]
     rounded-tr-[4px] rounded-bl-none rounded-br-none`}
        onClick={() => !isActive && setTabIndex(tabValue)}>
        {children}
    </button>
}

//Render All Tabs + Selected Tab Content
const Tabs = () => {
    const [tabIndex, setTabIndex] = useState(2);


    return (
        <div className="max-w-[600px]">
            {/* tabs */}
            <div className="flex">
                <Tab currentTab={tabIndex} setTabIndex={setTabIndex} tabValue={0}>Simple</Tab>
                <Tab currentTab={tabIndex} setTabIndex={setTabIndex} tabValue={1}>Object</Tab>
                <Tab currentTab={tabIndex} setTabIndex={setTabIndex} tabValue={2}>Canvas</Tab>
                <Tab currentTab={tabIndex} setTabIndex={setTabIndex} tabValue={3}>Load SVG</Tab>
                <Tab currentTab={tabIndex} setTabIndex={setTabIndex} tabValue={4}>Execute</Tab>
                <Tab currentTab={tabIndex} setTabIndex={setTabIndex} tabValue={5}>JSON</Tab>
            </div>

            {/* Tab Content */}
            <TabsContent currentTab={tabIndex} />

        </div>
    )
}

export default Tabs;