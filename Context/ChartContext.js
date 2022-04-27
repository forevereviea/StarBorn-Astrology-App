import { createContext, useState } from 'react';

const ChartContext = createContext();

export const ChartProvider = ({children}) => {
 const  [counter, setCounter] = useState(0);
return(
 <ChartContext.Provider
    value={{counter, setCounter}}
 >
     {children}
 </ChartContext.Provider>
);
}

export default ChartProvider