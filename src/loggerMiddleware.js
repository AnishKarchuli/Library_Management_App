const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Current State: ', store.getState());
    console.log('Action: ', action);
    const result = next(action);
    console.log('New State', store.getState());
    return result;
};

export default loggerMiddleware;