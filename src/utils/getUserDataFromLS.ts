export const getUserDataFromLS = () => {
    const data = localStorage.getItem("formData")
    return data ? JSON.parse(data) : []
}