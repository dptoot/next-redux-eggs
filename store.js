import { createWrapperInitializer } from '@redux-eggs/next'
import { createStore } from '@redux-eggs/redux-toolkit'
import { combineReducers } from 'redux';

function nestedCombineReducers(map) {
    if (!map) { throw new Error('You must specify a reducers map.'); }
    const flatReducersMapObject = {};
    const recursiveMapKeys = Object.keys(map);

    // eslint-disable-next-line no-restricted-syntax
    for (const recursiveMapKey of recursiveMapKeys) {
        const recursiveMapValue = map[recursiveMapKey];
        if (recursiveMapValue === null) {
            // eslint-disable-next-line no-continue
            continue;
        }
        if (recursiveMapValue === undefined) {
            // eslint-disable-next-line no-continue
            continue;
        }
        // Hopefully a reducer function, let's store it to combine it later
        if (typeof recursiveMapValue === 'function') {
            const reducer = recursiveMapValue;
            flatReducersMapObject[recursiveMapKey] = reducer;
            console.log("🚀 ~ file: nested-combine-reducers.js:28 ~ nestedCombineReducers ~ recursiveMapKey", recursiveMapKey)
        }
        // Nesting found, let's go deeper !
        if (typeof recursiveMapValue === 'object') {
            const nestedRecursiveReducersMapObject = recursiveMapValue;
            flatReducersMapObject[recursiveMapKey] = nestedCombineReducers(nestedRecursiveReducersMapObject);
        }
    }

    // Once all the properties have been processed, the ReducersMap is no longer incomplete and can be combined one last time
    return combineReducers(flatReducersMapObject);
}


const HYDRATE = '@eggs/hydrate';

const combiner = reducersMap => {
  const combinedReducer = nestedCombineReducers(reducersMap)

  return (state = {}, action) => {
    if (action.type === HYDRATE && action.payload) {
      return combinedReducer({ ...state, ...action.payload }, action)
    }

    return combinedReducer(state, action)
  }
}

const createAppStore = () => createStore({ combiner })

export const wrapperInitializer = createWrapperInitializer(createAppStore, {
    hydrationActionType: HYDRATE,
})