import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './TabComponent.css';
import ResponsiveGrid from "../compo/Grid";


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
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
  };
  const fetchedCategories = [
    {
      label: "Tanger-Tetouan",
      description: "Ali Ouahli"
    },
    {
      label: "Rabat-Casablanca",
      description: "Mouad Ouakil"
    },
    {
      label: "Marrakech-Essaouira",
      description: "Abo Kssrioui"
    },
   
  ];

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
          <ResponsiveGrid data={category.description} />
        </TabPanel>
      ))}
    </div>
  );
}