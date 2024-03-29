/**
 * Generates a SQL UPDATE query string based on the provided parameters.
 * 
 * @param table - The name of the table to update.
 * @param update_data - An object containing the data to update.
 * @param condition - The condition for updating the data.
 * @returns The generated SQL UPDATE query string.
 */
function genQueryUpdateSql({
    table,
    update_data = {},
    condition
}: {
    table: string;
    update_data: Record<string, any>;
    condition: string;
}): string {
    const updateInfo = Object.entries(update_data)?.map((info) => {
        const column = info?.[0];
        const isNumber = typeof info?.[1] == 'number' || typeof info?.[1] == 'boolean';
        const column_value: any = info?.[1];
        const value = isNumber ? info?.[1] : column_value?.trim();

        const check = isNumber ? false : (value?.indexOf(column) == 0 || value?.lastIndexOf(column) == (value?.length - column?.length));

        return (column + '=' + ((isNumber ? false : (value?.match(/[+|-|\/|*]/gi)?.length == 1 && check)) ? value?.toString() : JSON?.stringify(value)));
    })?.join(',');

    const s = `UPDATE ${table} SET ${updateInfo}${condition ? " WHERE " + condition + " " : ""}`;
    return s;
}

export default genQueryUpdateSql;
