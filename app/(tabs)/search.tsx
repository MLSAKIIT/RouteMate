import CalendarModal from "@/components/Calendar-modal";
import RecentSearches from "@/components/tab-search/RecentSearches";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, SafeAreaView, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../../components/Themed";

export type initialSearchDataType = {
  mode: string;
  from: string;
  to: string;
  date: string;
  startTime: string;
  endTime: string;
};

const initialSearchData = {
  mode: "",
  from: "",
  to: "",
  date: "",
  startTime: "",
  endTime: "",
};

export default function Search() {
  const [chooseActiveItem, setChooseActiveItem] = useState<boolean>(false);
  const [searchData, setSearchData] =
    useState<initialSearchDataType>(initialSearchData);
  const [dateOpen, setDateOpen] = useState<boolean>(false);
   const [activeItem, setActiveItem] = useState('Cab');
  const [dropdownOptions, setDropdownOptions] = useState(['Train']);

  const handleDropdownOptionClick = (option: string) => {
    setActiveItem(option);
    setDropdownOptions((prevOptions) => {
      const updatedOptions = prevOptions.filter((item) => item !== option);
      updatedOptions.push(activeItem);
      return updatedOptions;
    });
    setChooseActiveItem(false)
  };

  const handleSearch = () => {};

  const handleConfirmClick = () => {
    if (searchData.date !== "") {
      setDateOpen(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 20,
          height: "100%",
          display: "flex",
          paddingTop: 50,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            paddingBottom: 25,
          }}
        >
          <View style={{width: 100}}>
            <TouchableOpacity onPress={() => setChooseActiveItem((prev) => !prev)}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: '#2B2B2B',   paddingHorizontal: 20, paddingVertical: 6, borderRadius: 20,  }}>
                <Text style={{fontSize: 15, }}>{activeItem}</Text>
                <FontAwesome5 name="angle-down" size={20} style={{ color: 'white' }} />
              </View>
            </TouchableOpacity>
            {dropdownOptions.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleDropdownOptionClick(option)}
                style={{display: `${chooseActiveItem ? "flex" : "none"}` , position: 'absolute', justifyContent: 'center', alignItems: "center",  backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 6, borderRadius: 20, marginTop: 5, width: '100%', zIndex: 20 }}
              >
                <Text style={{fontSize: 15, backgroundColor: 'white', color: 'black'}}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              backgroundColor: "#2B2B2B",
              paddingHorizontal: 10,
              borderRadius: 10,
              zIndex: -1,
            }}
          >
            <TextInput
              autoCapitalize="none"
              placeholder="From"
              value={searchData.from}
              onChangeText={(event) =>
                setSearchData({ ...searchData, from: event })
              }
              style={{
                color: "white",
                borderBottomWidth: 1,
                borderBottomColor: "#646464",
                fontSize: 20,
                fontWeight: "600",
                padding: 16,
                outline: 'none'
              }}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="To"
              value={searchData.to}
              onChangeText={(event) =>
                setSearchData({ ...searchData, to: event })
              }
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "600",
                padding: 16,
                outline: 'none'
              }}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => setDateOpen(true)}>
              <View
                style={{
                  backgroundColor: "#2B2B2B",
                  borderRadius: 10,
                  paddingVertical: 8,
                  paddingHorizontal: 25,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 15,
                }}
              >
                <FontAwesome5
                  name="calendar"
                  size={20}
                  style={{ color: "white" }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "300",
                    color: `${searchData.date === "" ? "#828282" : "white"}`,
                  }}
                >
                  {searchData.date === "" ? "Select Date" : searchData.date}
                </Text>
              </View>
            </TouchableOpacity>
            <CalendarModal
              dateOpen={dateOpen}
              searchData={searchData}
              setSearchData={setSearchData}
              handleConfirmClick={handleConfirmClick}
              setDateOpen={setDateOpen}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#2B2B2B",
                paddingVertical: 10,
                paddingLeft: 25,
                paddingRight: 15,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Ionicons name="time" size={20} style={{ color: "white" }} />
              <TextInput
                autoCapitalize="none"
                keyboardType="numeric"
                placeholder="Start Time"
                placeholderTextColor={"#828282"}
                onChangeText={(event) =>
                  setSearchData({ ...searchData, startTime: event })
                }
                style={{
                  fontSize: 18,
                  fontWeight: "300",
                  color: "white",
                  width: "100%",
                  outline: "none",
                }}
              />
              <Text
                style={{ fontSize: 12, fontWeight: "600", color: "#828282" }}
              >
                HRS
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#2B2B2B",
                paddingVertical: 10,
                paddingLeft: 25,
                paddingRight: 15,
                borderRadius: 10,
              }}
            >
              <Ionicons name="time" size={20} style={{ color: "white" }} />
              <TextInput
                autoCapitalize="none"
                keyboardType="numeric"
                placeholder="End Time"
                placeholderTextColor={"#828282"}
                onChangeText={(event) =>
                  setSearchData({ ...searchData, endTime: event })
                }
                style={{
                  fontSize: 18,
                  fontWeight: "300",
                  color: "white",
                  width: "100%",
                  outline: "none",
                }}
              />
              <Text
                style={{ fontSize: 12, fontWeight: "600", color: "#828282" }}
              >
                HRS
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              backgroundColor: "#1DCDF9",
              paddingVertical: 8,
              paddingHorizontal: 25,
              borderRadius: 10,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="search" size={20} style={{ color: "white" }} />
            <Text style={{ fontSize: 18 }} onPress={handleSearch}>
              Search Cabs
            </Text>
          </View>
        </View>

        {/* recent group searches section*/}
        <Text style={{ color: "#505050", fontSize: 15, paddingLeft: 2 }}>
          Recent
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RecentSearches />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
