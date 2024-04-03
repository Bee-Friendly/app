export function formatFileName(date, username, id) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}_${username}-${id}.webm`;
}