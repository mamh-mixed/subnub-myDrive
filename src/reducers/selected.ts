import { FileInterface } from "../types/file";
import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { FolderInterface } from "../types/folders";

interface MainSecionType {
  type: "" | "quick-item" | "file" | "folder";
  id: string;
  file: FileInterface | null;
  folder: FolderInterface | null;
}

export interface SelectedStateType {
  mainSection: MainSecionType;
  popupModal: FileInterface | null;
  multiSelectMode: boolean;
  multiSelectMap: {
    [key: string]: MainSecionType;
  };
  multiSelectCount: number;
}

const initialState: SelectedStateType = {
  mainSection: {
    type: "",
    id: "",
    file: null,
    folder: null,
  },
  popupModal: null,
  multiSelectMode: false,
  multiSelectMap: {},
  multiSelectCount: 0,
};

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    setMainSelect: (state, action: PayloadAction<MainSecionType>) => {
      state.mainSection = action.payload;
    },
    resetSelected: () => initialState,
    setMultiSelectMode: (state, action: PayloadAction<MainSecionType>) => {
      state.mainSection = { type: "", id: "", file: null, folder: null };
      if (
        state.multiSelectMap[action.payload.id] &&
        state.multiSelectMap[action.payload.id].type !== action.payload.type
      ) {
        state.multiSelectMode = true;
        state.multiSelectMap[action.payload.id] = action.payload;
      } else if (state.multiSelectMap[action.payload.id]) {
        delete state.multiSelectMap[action.payload.id];
        const newCount = state.multiSelectCount - 1;
        if (newCount === 0) {
          state.multiSelectMode = false;
        }
        state.multiSelectCount = newCount;
      } else {
        state.multiSelectMode = true;
        state.multiSelectMap[action.payload.id] = action.payload;
        state.multiSelectCount++;
      }
    },
    resetMultiSelect: (state) => {
      state.multiSelectMode = false;
      state.multiSelectMap = {};
      state.multiSelectCount = 0;
    },
  },
});

export const {
  setMainSelect,
  resetSelected,
  setMultiSelectMode,
  resetMultiSelect,
} = selectedSlice.actions;

export default selectedSlice.reducer;