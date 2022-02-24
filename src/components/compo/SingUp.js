import React from 'react'

import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";
import { Link } from 'react-router-dom';
const { Text } = Typography

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://pfhsimszxyjbnfycnltf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzkwNjY5MCwiZXhwIjoxOTU5NDgyNjkwfQ.t0NFVJp-E4NUB1tHB1soPJpdfRtKum4fPv2PkZbB930"
);



const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>

       <h1><Link to="/panel"> Votre Dashboard </Link></h1> 

        <Text>{user.email}</Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function Home() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth   supabaseClient={supabase}  />
      </Container>
    </Auth.UserContextProvider>
  );
};