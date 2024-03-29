/**
 * Generates a SQL SELECT query string for relational database management systems (RDMS) based on the provided parameters.
 * 
 * @param table_list - An object containing table names.
 * @param relation_key - An object defining table relations.
 * @param specific_column - An object defining specific columns to select.
 * @param limitSkip - An object defining limit and skip for pagination.
 * @param condition - A string defining SQL conditions.
 * @param sort - An object defining sorting criteria.
 * @param havingCondition - A string defining HAVING clause conditions.
 * @param groupBY - An array defining columns for GROUP BY clause.
 * @param min - A string defining the column to calculate minimum value.
 * @param max - A string defining the column to calculate maximum value.
 * @param count - A string defining the column to count.
 * @param sum - A string defining the column to calculate sum.
 * @returns The generated SQL SELECT query string.
 */

const genQueryRdmsSql = ({
    table_list = {
        table1: "",
        table2: "",
        table3: '',
        table4: '',
        table5: '',
        table6: '',
        table7: '',
        table8: '',
    },
    relation_key = {
        "on": {
            "relation": "CROSS JOIN",
            "table1": "",
            "table2": "",
            "table3": "",
            "table4": "",
            "table5": "",
            "table6": "",
            "table7": ""
        },
        "on1": {
            "relation": "CROSS JOIN",
            "table1": "",
            "table2": "",
            "table3": "",
            "table4": "",
            "table5": "",
            "table6": "",
            "table7": ""
        },
        "on2": {
            "relation": "INNER JOIN",
            "table1": "",
            "table2": "",
            "table3": "",
            "table4": "",
            "table5": "",
            "table6": "",
            "table7": ""
        },
        "on3": {
            "relation": "LEFT JOIN",
            "table1": "",
            "table2": "",
            "table3": "",
            "table4": "",
            "table5": "",
            "table6": "",
            "table7": ""
        },
        "on4": {
            "relation": "CROSS JOIN",
            "table1": "",
            "table2": "",
            "table3": "",
            "table4": "",
            "table5": "",
            "table6": "",
            "table7": ""
        },
        "on5": {
            "relation": "CROSS JOIN",
            "table1": "",
            "table2": "",
            "table3": "",
            "table4": "",
            "table5": "",
            "table6": "",
            "table7": ""
        },
    },
    specific_column = {
        "table1": [],
        "table2": [],
        "table3": [],
        "table4": [],
        "table5": [],
        "table6": [],
        "table7": [],
    },
    limitSkip = { limit: '', skip: '' },
    condition = '',
    sort,
    havingCondition = '',
    groupBY = [],
    min = '',
    max = '',
    count = '',
    sum = ""
}: {
    table_list: {
        table1: string,
        table2?: string,
        table3?: string,
        table4?: string,
        table5?: string,
        table6?: string,
        table7?: string,
        table8?: string,
    },
    relation_key?: {
        "on"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on1"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on2"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on3"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on4"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on5"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on6"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
        "on7"?: {
            "relation"?: 'JOIN' | 'INNER JOIN' | 'OUTER JOIN' | 'CROSS JOIN' | 'RIGHT JOIN' | 'LEFT JOIN',
            "table1"?: string,
            "table2"?: string,
            "table3"?: string,
            "table4"?: string,
            "table5"?: string,
            "table6"?: string,
            "table7"?: string,
            "table8"?: string,
        },
    },
    specific_column?: {
        "table1"?: string[],
        "table2"?: string[],
        "table3"?: string[],
        "table4"?: string[],
        "table5"?: string[],
        "table6"?: string[],
        "table7"?: string[],
        "table8"?: string[],
    },
    limitSkip?: { limit?: string | number, skip?: string | number },
    condition?: string,
    sort?: {
        table1?: [string, 0 | 1];
        table2?: [string, 0 | 1];
        table3?: [string, 0 | 1];
        table4?: [string, 0 | 1];
        table5?: [string, 0 | 1];
        table6?: [string, 0 | 1];
        table7?: [string, 0 | 1];
        table8?: [string, 0 | 1];
    },
    havingCondition?: string,
    groupBY?: string[],
    min?: string,
    max?: string,
    count?: string,
    sum?: string
}) => {

    const table_length = Object.values(table_list)?.length;
    const main_table_name = table_list?.table1;

    let get_specif_field;
    if (Object.values(specific_column).flat().length) {
        get_specif_field = Object.entries(specific_column).map((sf) => {
            const table = sf?.[0]
            const table_all_list: any = table_list
            const column = table_all_list?.[table] && sf?.[1]?.map(clm => {
                return `${table_all_list[table]}.${clm}`
            })
            return column
        }).flat().join(', ');
    }

    let aliasesRelationTable: string[] = []
    const relationWithTable = Object.entries(relation_key).map((r_key) => {
        const relationRdms = r_key[1]
        const { relation, ...onCondition } = relationRdms;
        let relationTable;

        const getCondition = Object.entries(onCondition).map((rdmsTable) => {
            const aliasesTable = rdmsTable[0]
            const table_all_list: any = table_list

            if (aliasesTable !== 'table1' && !aliasesRelationTable?.includes(table_all_list[aliasesTable])) {
                relationTable = table_all_list[aliasesTable]
                aliasesRelationTable = [...aliasesRelationTable, relationTable]
            }

            const column = rdmsTable[1]
            return `${table_all_list[aliasesTable]}.${column}`
        }).join(' = ')

        return `${relation} ${relationTable} ON ${getCondition}`
    })?.slice(0, table_length - 1)?.join('\n')


    const limit = limitSkip?.limit
    const skip = limitSkip?.skip
    let limit_skip;
    if (limit) {
        limit_skip = ` LIMIT ${skip}, ${limit}`;
    }

    let sorting;
    const getSort: any = sort || {}
    if (Object.values(getSort).flat().length) {
        sorting = ` ORDER BY ${Object.entries(getSort).map(f => {
            const field_column = f[0]
            const asc: any = f[1]
            const table_all_list: any = table_list
            return `${table_all_list[field_column]}.${asc[0]} ${(asc[1] == 1 ? "ASC" : "DESC")}`
        }).toString()}`
    }

    let getGroupBy;
    if (groupBY?.length) {
        getGroupBy = ` GROUP BY  ${groupBY?.join(',')}`
    }

    let mmcsColumn;
    if (min) {
        mmcsColumn = ` min(${min}) as minimum `
    }
    else if (max) {
        mmcsColumn = ` max(${max}) as maximum `
    }
    else if (count) {
        mmcsColumn = ` count(${count}) as count `
    }
    else if (sum) {
        mmcsColumn = ` sum(${sum}) as summation `
    }

    let sql = `SELECT ${(get_specif_field ? get_specif_field : (mmcsColumn ? mmcsColumn : '*'))} FROM ${main_table_name} ${relationWithTable} ${condition ? "WHERE " + condition : ''}`;
    sql += `${getGroupBy ? getGroupBy : ""} ${havingCondition ? " HAVING " + havingCondition : ''}${sorting ? sorting : ''}${limit_skip ? limit_skip : ""}`
    return sql;
};

export default genQueryRdmsSql;
