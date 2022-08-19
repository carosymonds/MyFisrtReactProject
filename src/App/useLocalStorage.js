import React from "react";


function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        }catch(error){
          setError(error);
        }
      }, 3000);
    }, [sincronizedItem]);

    const saveItem = (newItem) => {
      try{
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem('TODOS_V1', stringifiedTodos);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    }

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
    sincronizedItem
  };

}

export {useLocalStorage}