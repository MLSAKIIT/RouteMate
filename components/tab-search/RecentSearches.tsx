import { View, Text } from '../Themed'
import React from 'react'
import RecentSearchesGroup from './RecentSearchesGroup'

const tempData = [
  {
    groupName: 'Safe Cafe',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 3,
    joinLink: '/(tabs)/group',
  },
  {
    groupName: 'Hello Cabs',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 4,
    joinLink: '/(tabs)/group',
  },
  {
    groupName: 'Hello Cabs',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 4,
    joinLink: '/(tabs)/group',
  },
  {
    groupName: 'Hello Cabs',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 4,
    joinLink: '/(tabs)/group',
  },
  {
    groupName: 'Hello Cabs',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 4,
    joinLink: '/(tabs)/group',
  },
  {
    groupName: 'Hello Cabs',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 4,
    joinLink: '/(tabs)/group',
  },
  {
    groupName: 'Hello Cabs',
    imageUrl: 'https://ucarecdn.com/a69288bf-2c13-46ed-bf35-88b4cf5313ae/-/preview/1000x400/-/format/auto/-/quality/smart_retina/',
    NoOfMembers: 4,
    joinLink: '/(tabs)/group',
  },
]

const RecentSearches = () => {
  return (
    <View style={{display: 'flex', gap: 10, flexDirection: 'column', paddingVertical: 10}}>
      {tempData.map((group, index) => (
        <RecentSearchesGroup 
          key={index}
          imageUrl={group.imageUrl}
          groupName={group.groupName}
          NoOfMembers={group.NoOfMembers}
          joinLink={group.joinLink}
        />
      ))}
    </View>
  )
}

export default RecentSearches