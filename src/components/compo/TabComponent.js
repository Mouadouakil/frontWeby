import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './TabComponent.css';
import ResponsiveGrid from "../compo/Grid";
import axios from "axios";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabComponent() {
  const baseURL = "http://localhost:5030/Events";
  const [currentTab, setCurrentTab] = React.useState(0);
  const [data, setData] = React.useState(null);
  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
  };
  const fetchedCategories = [
    {
      label: "Prochain",
    },
    {
      label: "récent",
      
    },
    {
      label: "Aujourd'hui",
    },
   
  ];
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  if (!data) return null;


  return (
    <div className="tab">
<Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered>
          {fetchedCategories.map((category) => (
            <Tab key={category.label} label={category.label} />
          ))}
        </Tabs>
        </Box>
      {fetchedCategories.map((category, index) => (
        <TabPanel key={category.label} value={currentTab} index={index} className="tabNa">
          <ResponsiveGrid data={data} />
        </TabPanel>
      ))}
    </div>
  );
}