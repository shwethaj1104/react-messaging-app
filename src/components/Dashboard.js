import React from 'react'
import { useConversations } from '../contexts/ConversationsProvider'
import Sidebar from './Sidebar'
import OpenConversations from './OpenConversations'

export default function Dashboard({id}) {
  const {selectedConversation} = useConversations();
  return (
    <div className="d-flex" style={{height:'100vh'}}>
        <Sidebar id={id} />
         {/* <OpenConversations /> */}
        {selectedConversation && <OpenConversations />}
    </div>
  )
}
