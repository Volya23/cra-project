export const getUsers = () => {
    const url = 'https://randomuser.me/api/?results=5000';
    return fetch(url)
    .then((response) => response.json());
}