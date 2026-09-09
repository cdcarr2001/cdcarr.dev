/**
 * Parse a date in YYYY-MM-DD format into a MonthName Year string
 * @param dateString YYYY-MM-DD formated date
 * @returns MonthName Year string
 */
export function parseDate(dateString: string): string {

    let split = dateString.split("-");

    let date = new Date();

    if (split[0]) {

        date.setFullYear(Number.parseInt(split[0]));
    }
    if (split[1]) {

        date.setMonth(Number.parseInt(split[1]) - 1);
    }
    if (split[2]) {

        date.setDate(Number.parseInt(split[2]));
    }

    // If the date failed to be processed (indicated by being NaN)
    if (!date.getDate()) {

        // Return date string as is
        return(dateString);
    }

    return(date.toLocaleString('default', { month: 'long', year: "numeric" }));
}