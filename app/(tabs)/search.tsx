import RecentSearches from '@/components/tab-search/RecentSearches';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, TextInput, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';
import { Text, View } from '../../components/Themed';

export type initialSearchDataType = {
  mode: string,
  from: string,
  to: string,
  date: string,
  startTime: string,
  endTime: string
}

const initialSearchData = {
  mode: '',
  from: '',
  to: '',
  date:  '',
  startTime: '',
  endTime: '',
}

export default function Search() {
  const [chooseMode, setChooseMode] = useState(false)
  const [activeMode, setActiveMode] = useState('cab')
  const [searchData, setSearchData] = useState<initialSearchDataType>(initialSearchData)
  const [dateOpen, setDateOpen] = useState(true)

  const handleSearch = () => {
    
  }

  const handleConfirmClick = () => {
    if (searchData.date !== '') {
      setDateOpen(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{paddingHorizontal: 20,height: "100%",  display: 'flex', paddingTop: 50, }}>
        <View style={{display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 25}}>
          <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',gap: 5, width: 85}}>
            <TouchableOpacity onPress={() => setChooseMode(prev => !prev)}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12, backgroundColor: '#2B2B2B', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20}}>
                <Text style={{fontSize: 15}}>Cab</Text>
                <FontAwesome5 name="angle-down" size={20} style={{color: 'white'}}/>
              </View>   
            </TouchableOpacity>
            <TouchableOpacity style={{display: `${chooseMode ? "flex" : "none"}`, position: 'absolute', width: 85, zIndex: 10}}>
              <Text style={{fontSize: 15, backgroundColor: 'white', color: 'black', fontWeight: '600', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Train</Text>
            </TouchableOpacity>
          </View>  
          <View style={{backgroundColor: '#2B2B2B', paddingHorizontal: 10, borderRadius: 10}}>
            <TextInput 
              autoCapitalize='none' 
              placeholder='From' 
              style={{color: 'white', borderBottomWidth: 1, borderBottomColor: '#646464', fontSize: 20, fontWeight: '600', padding: 16}} 
            />
            <TextInput 
              autoCapitalize='none' 
              placeholder='To' 
              style={{color: 'white', fontSize: 20, fontWeight: '600', padding: 16}} 
            />
          </View>
          <View> 
            <TouchableOpacity onPress={() => setDateOpen(true)}>
              <View style={{backgroundColor: "#2B2B2B", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 25, display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 15}}>
                <FontAwesome5 name='calendar' size={20} style={{color: "white"}}/>
                <Text style={{fontSize: 18, fontWeight: '300', color: "#828282"}}>
                  {searchData.date === '' ? 'Select Date' : searchData.date}
                </Text>
              </View>
            </TouchableOpacity>
            {/* <Modal
              animationType='slide' 
              transparent={true}
              visible={dateOpen}
            >
              <View style={{ backgroundColor: 'transparent', width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                <View style={{backgroundColor: 'white',paddingTop: 10, paddingHorizontal: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30, }}>
                  <DatePicker 
                    mode='calendar'
                    minimumDate={''}
                    selected='2023/01/03'
                    onDateChange={(propDate) => setSearchData({...searchData, date: propDate})}
                  />
                  <View style={{backgroundColor: 'white', paddingBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => setDateOpen(false)}>
                      <Text style={{fontSize: 20, fontWeight: '600', backgroundColor: '#009DE5FA', paddingHorizontal: 40, paddingVertical: 7, borderRadius: 5}}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleConfirmClick}>
                      <Text style={{fontSize: 20, fontWeight: '600', backgroundColor: 'gray', paddingHorizontal: 40, paddingVertical: 7, borderRadius: 5}}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal> */}
          </View>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'space-between'}}>
            <View style={{display: 'flex',flex: 1, flexDirection: 'row', gap: 10, backgroundColor: '#2B2B2B', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 10}}>
              <Ionicons name='time' size={20} style={{color: 'white'}}/>
              <Text style={{fontSize: 18, fontWeight: '300', color: "#828282"}}>
                Start Time
              </Text>
            </View>
            <View style={{display: 'flex', flex: 1, flexDirection: 'row', gap: 10, backgroundColor: '#2B2B2B', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 10}}>
              <Ionicons name='time' size={20} style={{color: 'white'}}/>
              <Text style={{fontSize: 18, fontWeight: '300', color: "#828282"}}>End Time</Text>
            </View>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10, backgroundColor: "#1DCDF9", paddingVertical: 8, paddingHorizontal: 25, borderRadius: 10, alignItems: 'center', marginTop: 5}}>
            <Ionicons name="search" size={20} style={{color: 'white', }}/>
            <Text style={{fontSize: 18, }} onPress={handleSearch}>Search Cabs</Text>
          </View>
        </View>

        {/* recent group searches section*/}
        <View style={{}}>
          <RecentSearches />
        </View>
      </View>
    </SafeAreaView>
  );
}

