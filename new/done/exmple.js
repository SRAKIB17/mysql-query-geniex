const condition = {
    "$and": {
        "field1": { "=": 10 },
        "field2": { "$not_include": { "value1": [1, 2, 3], "value2": [4, 5, 6] } },
        "$or": {
            "field3": { "$pattern": { "subfield": "pattern*" } },
            "field4": { "$between": { "$from": 10, "$to": 20 } }
        }
    },
    "$pattern": {
        test2: `%5`,
        "$and": {
            test3: `%64%`,
            test14: `%644`,
            test24: `%5`,
        },
        "$or": {
            test: `%64%`,
            test1: `%644`,
            test2: `%5`,
        }
    },
    "$not_pattern": {
        test2: `%5`,
        "$and": {
            test3: `%64%`,
            test14: `%644`,
            test24: `%5`,
        },
        "$or": {
            test: `%64%`,
            test1: `%644`,
            test2: `%5`,
        }
    },
    "$not_include": {
        "$or": {
            test0: ['fsfl', 'flsdfs', 'fsdlfd'],
            test1: ['fsfl', 'flsdfs', 'fsdlfd'],
        },
        "$and": {
            test2: ['fsfl', 'flsdfs', 'fsdlfd'],
            test3: ['fsfl', 'flsdfs', 'fsdlfd'],
        }
    },
    "$include": {
        "$or": {
            test4: ['fsfl', 'flsdfs', 'fsdlfd'],
            test5: ['fsfl', 'flsdfs', 'fsdlfd'],
        },
        "$and": {
            test6: ['fsfl', 'flsdfs', 'fsdlfd'],
            test7: ['fsfl', 'flsdfs', 'fsdlfd'],
        }
    },
    "$between": {
        "$and": {
            test9: {
                "$from": 30,
                "$to": 50
            },
            test10: {
                "$from": 30,
                "$to": 50
            },
        },
        "$or": {
            test11: {
                "$from": 30,
                "$to": 50
            },
            test12: {
                "$from": 30,
                "$to": 50
            },
        }
    },
    "$not_between": {
        "$and": {
            test13: {
                "$from": 30,
                "$to": 50
            },
            test14: {
                "$from": 30,
                "$to": 50
            },
        },
        "$or": {
            test15: {
                "$from": 30,
                "$to": 50
            },
            test16: {
                "$from": 30,
                "$to": 50
            },
        }
    }
};