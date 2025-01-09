export const addBook = (title, author, isbn) => {
    return {
        type: "ADD_BOOK",
        payload: {title, author, isbn}
    }
}

export const removeBook = (isbn) => {
    return {
        type: "REMOVE_BOOK",
        payload: isbn
    }
}