export const saveToLocalStorage = (state) => {
  try{
    let serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  }catch(err){
    console.log('Could not save state');
  }
};

export const loadFromLocalStorage = () => {
  try {
    let serializedState = localStorage.getItem("state");
    if(serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};