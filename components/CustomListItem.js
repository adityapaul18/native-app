import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar , ListItem } from 'react-native-elements'

const CustomListItem = ({id,chatName,enterchat}) => {
    const [chatMessages, setChatMessages] = useState([]);
    return (
        <ListItem bottomDivider >
        <Avatar rounded source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHC8MYR0HrmKw6n9UoGqoLXWCSUwGaxTVcAGMwEYemRGqxJ_WJXpowQsLzowDKwPFzLy4&usqp=CAU"/>
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "800" }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            {/* {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message} */}sfsdsdsd
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
