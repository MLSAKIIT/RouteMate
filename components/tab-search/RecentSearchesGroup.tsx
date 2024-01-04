import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View } from '../Themed'

type RecentSearchesGroupType = {
  imageUrl : string
  groupName: string
  NoOfMembers: number
  joinLink: string
}

const RecentSearchesGroup = ({ imageUrl, groupName, NoOfMembers, joinLink}: RecentSearchesGroupType) => {
  return (
    <View style={{paddingVertical: 11, paddingHorizontal: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#2B2B2B', borderRadius: 10}}>
      <View style={{display: 'flex', flexDirection: 'row', gap: 12, backgroundColor: 'transparent' }}>
        <Image 
            style={{width: 34, height: 34, borderRadius: 100, }}
            source={{
                uri: imageUrl
            }}
        /> 
        <View style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
            <Text style={{fontSize: 18}}>{groupName}</Text>
            <View style={{display: 'flex', flexDirection: 'row', gap: 5, backgroundColor: 'transparent'}}>
              <Ionicons name="people" color="#009DE5" size={15} />
              <Text style={{color: '#888'}}>{ NoOfMembers }</Text>
            </View>
        </View>
      </View>
      <Link href={joinLink as `http${string}`}>
        <TouchableOpacity style={{backgroundColor: '#00D7A2', borderRadius: 20, display: 'flex', justifyContent: 'center', cursor: 'pointer'}}>
          <Text style={{fontSize: 15, fontWeight: '700', paddingHorizontal: 20, paddingVertical: 8}}>Join</Text>
        </TouchableOpacity> 
      </Link>
    </View>
  )
}

export default RecentSearchesGroup