export const contexto = React.createContext();

const contextoProvider = (props) => {
    const state = {};
    const reducer = (state, action) => {
        
    };

    return (
        <contexto.Provider value={{state: state, reducer}}>
            {props.children}
        </contexto.Provider>
    );
}

export default contextoProvider;