export const getNodes = () => {
    const addButton = document.querySelector(".add-todo-button");
    const todoList = document.querySelector(".todo-list-inner");

    return {
        addButton,
        todoList
    }
}
