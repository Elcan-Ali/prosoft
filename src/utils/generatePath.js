
export const generateProjectCategoryPath = (str) => {
    const path = str.split("_").join("-")
    return path
}

export const generatePath = (str) => {
    const path = str.toLowerCase().split(" ").join("-")
    return path
}

export const ungeneratePath = (str) => {
    const path = str.toLowerCase().split("-").join(" ")
    return path
}

