export const contexto = React.createContext();

const contextoProvider = (props) => {
    // Initial Provider State
    const state = {};

    // Reducer Function
    const reducer = (state, action) => {
        
    };

    return (
        <contexto.Provider value={{state: state, reducer}}>
            {props.children}
        </contexto.Provider>
    );
}

export default contextoProvider;