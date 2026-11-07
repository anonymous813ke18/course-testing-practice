function analyzeArray (arr) {
    return {
        average: (arr.reduce((prev, cur) => { 
            if (!Number.isInteger(cur))
                return prev + cur.charCodeAt(0);

            return prev + cur 
        }, 0))/arr.length,
        min: arr.reduce((prev, cur) => {
            if (!Number.isInteger(cur)){
                if (!Number.isInteger(prev)) {
                    if (cur.charCodeAt(0) < prev.charCodeAt(0)) {
                        prev = cur;
                    }
                    return prev;
                }
                if (cur.charCodeAt(0) < prev) {
                    prev = cur;
                }
                return prev;
            } else {
                if (!Number.isInteger(prev)) {
                    if (cur < prev.charCodeAt(0)) {
                        prev = cur;
                    }
                    return prev;
                }
                if (cur < prev) {
                    prev = cur;
                }
                return prev;
            }
        }),
        max: arr.reduce((prev, cur) => {
            if (!Number.isInteger(cur)){
                if (!Number.isInteger(prev)) {
                    if (cur.charCodeAt(0) > prev.charCodeAt(0)) {
                        prev = cur;
                    }
                    return prev;
                }
                if (cur.charCodeAt(0) > prev) {
                    prev = cur;
                }
                return prev;
            } else {
                if (!Number.isInteger(prev)) {
                    if (cur > prev.charCodeAt(0)) {
                        prev = cur;
                    }
                    return prev;
                }
                if (cur > prev) {
                    prev = cur;
                }
                return prev;
            }
        }),
        length: arr.length,
    }
}

export { analyzeArray }