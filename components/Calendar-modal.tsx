import React, { SetStateAction } from "react";
import { Text, View } from "./Themed";
import { Modal, TouchableOpacity } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { initialSearchDataType } from "@/app/(tabs)/search";

type CalendarModalType = {
    dateOpen: boolean
    searchData: initialSearchDataType
    setSearchData: (setData: initialSearchDataType) => void
    handleConfirmClick: () => void
    setDateOpen: (setDate: boolean) => void
}

const CalendarModal = ({ dateOpen, searchData, setSearchData, handleConfirmClick, setDateOpen }: CalendarModalType) => {
  return (
    <Modal animationType="slide" transparent={true} visible={dateOpen}>
      <View
        style={{
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            paddingTop: 10,
            paddingHorizontal: 50,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <DatePicker
            mode="calendar"
            minimumDate={""}
            selected="2023/01/03"
            onDateChange={(propDate) =>
              setSearchData({ ...searchData, date: propDate })
            }
          />
          <View
            style={{
              backgroundColor: "white",
              paddingBottom: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity onPress={handleConfirmClick}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  backgroundColor: "#009DE5FA",
                  paddingHorizontal: 40,
                  paddingVertical: 7,
                  borderRadius: 5,
                }}
              >
                Confirm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDateOpen(false)}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  backgroundColor: "gray",
                  paddingHorizontal: 40,
                  paddingVertical: 7,
                  borderRadius: 5,
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CalendarModal;
