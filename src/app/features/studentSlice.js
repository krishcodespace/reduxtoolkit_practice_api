import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentData: [
    {
      name: "krish",
      address: "leo colony south morang, melbourne, Austrlia",
      gender: "male",
      hobbies: ["reading"],
      dob: "2002-09-02",
    },
    {
      name: "parth",
      address: "15, will church empireear, adelide,Austrlia ",
      gender: "male",
      hobbies: ["traveling"],
      dob: "2000-11-04",
    },
    {
      name: "rutvik",
      address: "157, robinson  empireear, adelide,Austrlia ",
      gender: "male",
      hobbies: ["reading"],
      dob: "1984-06-23",
    },
    {
      name: "harmsih",
      address: "10, roscoe katargam , adelide,Austrlia ",
      gender: "male",
      hobbies: ["chess"],
      dob: "2000-07-09",
    },
    {
      name: "jaymi",
      address: "10 madhav partk society, junagadh  ",
      gender: "female",
      hobbies: ["chess"],
      dob: "2004-09-22",
    },
    {
      name: "sger",
      address: "25, harivant society, vagha chokdi vadodra ",
      gender: "male",
      hobbies: ["chess"],
      dob: "1997-08-12",
    },
  ],
};

const studentSlice = createSlice({
  name: "studentTabler",

  initialState,

  reducers: {
    setStudentData: (state = initialState, action) => {
      console.log("action.payload", action.payload);
      state.studentData = [...state.studentData, action.payload];
      // state.studentData.push(action.payload)
    },
    deleteData: (state, action) => {
      console.log("action.payload", action.payload);

      state.studentData = state.studentData.filter(
        (_, i) => i !== action.payload
      );
    },
    updateData: (state, action) => {
      const { index, editdata } = action.payload;
      console.log("index,editdata", index, editdata);

      state.studentData = state.studentData.filter((item, i) => {
        return (i = action.payload.index ? action.payload.editdata : item);
      });
    },
  },
});

export const { setStudentData, deleteData, updateData } = studentSlice.actions;

export default studentSlice.reducer;
