import Login from './Login';
import React,{useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import { ContactsProvider } from '../contexts/ContactsProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider';

function App() {
  const [id,setId] = useLocalStorage('id');
  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
      <Dashboard  id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )
  return (
      id ? dashboard :<Login onIdSubmit={setId}></Login>
  );
}

export default App;
