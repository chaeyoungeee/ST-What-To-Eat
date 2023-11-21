export default function getCurrentDate() {
    const currentDate = new Date();

    const year = (currentDate.getFullYear() % 100).toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate;
}
