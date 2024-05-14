const transientState = {
  "colorId": 0,
  "materialId": 0,
  "equipmentId": 0,
  "sizeId": 0
}

export const setPaintChoice = (chosenPaintId) => {
  transientState.paintId = chosenPaintId
  console.log("colorId:", transientState.paintId)
}

export const setInteriorChoice = (chosenInteriorId) => {
  transientState.materialId = chosenInteriorId
  console.log("materialId:", transientState.materialId)
}

export const setTechnologyChoice = (chosenTechnologyId) => {
  transientState.equipmentId = chosenTechnologyId
  console.log("equipmentId:", transientState.equipmentId)
}

export const setWheelChoice = (chosenWheelId) => {
  transientState.sizeId = chosenWheelId
  console.log("sizeId:", transientState.sizeId)
}