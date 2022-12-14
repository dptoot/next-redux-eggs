export const getRootEgg = () => {
    return {
      id: 'root-egg',
      keep: true,
      reducersMap: {
          rootEgg: () => true,
      },
    }
  }

  export const getNestedEgg = () => {
    return {
      id: 'nested-egg',
      reducersMap: {
        nested: {
            egg: () => true,
        }
      },
    }
  }

  export const getSiblingNestedEgg = () => {
    return {
      id: 'sibling-nested-egg',
      reducersMap: {
        nested: {
            sibling: () => true,
        }
      },
    }
  }
