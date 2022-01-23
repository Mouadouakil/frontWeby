import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './TabComponent.css';
import ResponsiveGrid from "../compo/Grid";
import axios from "axios";
import Card from "./Card.js"
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
  const [query, setQuery] = React.useState(null);
  const baseURL = "http://localhost:5030/Events";
  const [currentTab, setCurrentTab] = React.useState(0);
  const [data, setData] = React.useState(null);
  const [def, setDef] = React.useState(null);
  let result = data;
  
  const handleChange = (event, newTab) => {
    setCurrentTab(newTab);
    console.log(newTab);
    console.log(def);
  
    console.log(data);
    if(newTab === 2){
      setData(result.filter((data) => {
        return data.datevent.search("22") !== -1;
        }))
    }else{
      setData(def);
    }
  
   

  };
  const fetchedCategories = [
    {
      label: "Developpement",
    },
    {
      label: "Data",
    },
    {
      label: "AI",
    },
    {
      label: "Devops",
    },
    {
      label: "Design",
    },
    {
      label: "UI/UX",
    },
    {
      label: "Security",
    },
    {
      label: "MLops",
    },
    {
      label: "Cloud",
    },
    
   
  ];
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
    axios.get(baseURL).then((response) => {
      setDef(response.data);
    });
  }, []);

  if (!data) return null;

  if (!def) return null;



  return (
    <div className="tab">

     <div className="s">  <h1>Recherche des Evenements:</h1> <br></br> <br></br> <input placeholder="Chercher Par titre " className="search-bar" onChange={event => setQuery(event.target.value)} />
       <br></br>
       <br></br>
       <br></br></div>

  {data.filter(post => {
    if (query === '') {
      return null;
    } else if (post.title.includes(query)) {
      return post;
    }
  }).map((post, index) => (
    <div className="box2" key={index}>
     <Card data={post} />
     <br></br>
    </div>
  ))}



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