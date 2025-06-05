// Excel Formula Data for Marketing Professionals
const formulaData = {
  mathematical: [
    {
      name: 'SUM',
      purpose: 'Adds all the numbers in a range of cells',
      syntax: '=SUM(number1, [number2], ...)',
      example: '=SUM(B2:B8)',
      useCase: 'Calculate total marketing spend across multiple campaigns'
    },
    {
      name: 'AVERAGE',
      purpose: 'Returns the average (arithmetic mean) of the arguments',
      syntax: '=AVERAGE(number1, [number2], ...)',
      example: '=AVERAGE(C2:C20)',
      useCase: 'Find average click-through rate across different ad sets'
    },
    {
      name: 'COUNT',
      purpose: 'Counts the number of cells in a range that contain numbers',
      syntax: '=COUNT(value1, [value2], ...)',
      example: '=COUNT(A1:A100)',
      useCase: 'Count the number of campaigns with numerical data'
    },
    {
      name: 'MAX',
      purpose: 'Returns the largest value in a set of values',
      syntax: '=MAX(number1, [number2], ...)',
      example: '=MAX(D5:D15)',
      useCase: 'Identify the highest performing marketing channel by conversion rate'
    },
    {
      name: 'MIN',
      purpose: 'Returns the smallest number in a set of values',
      syntax: '=MIN(number1, [number2], ...)',
      example: '=MIN(E10:E25)',
      useCase: 'Find the lowest cost-per-acquisition across campaigns'
    },
    {
      name: 'MEDIAN',
      purpose: 'Returns the median of the given numbers',
      syntax: '=MEDIAN(number1, [number2], ...)',
      example: '=MEDIAN(F5:F35)',
      useCase: 'Determine the median engagement rate to eliminate outlier effects'
    },
    {
      name: 'ROUND',
      purpose: 'Rounds a number to a specified number of digits',
      syntax: '=ROUND(number, num_digits)',
      example: '=ROUND(C7, 2)',
      useCase: 'Round budget allocations to the nearest dollar or cent'
    },
    {
      name: 'POWER',
      purpose: 'Returns the result of a number raised to a power',
      syntax: '=POWER(number, power)',
      example: '=POWER(1.05, 12)',
      useCase: 'Calculate compound growth rates for marketing metrics'
    }
  ],
  logical: [
    {
      name: 'IF',
      purpose: 'Returns one value if a condition is true and another value if it\'s false',
      syntax: '=IF(logical_test, value_if_true, [value_if_false])',
      example: '=IF(B5>100,"High Performer","Needs Improvement")',
      useCase: 'Categorize marketing campaigns based on performance thresholds'
    },
    {
      name: 'AND',
      purpose: 'Returns TRUE if all arguments are TRUE',
      syntax: '=AND(logical1, [logical2], ...)',
      example: '=AND(B5>100, C5<1000)',
      useCase: 'Check if a campaign meets multiple performance criteria'
    },
    {
      name: 'OR',
      purpose: 'Returns TRUE if any argument is TRUE',
      syntax: '=OR(logical1, [logical2], ...)',
      example: '=OR(D5="Email", D5="Social")',
      useCase: 'Identify campaigns that are either email or social media based'
    },
    {
      name: 'NOT',
      purpose: 'Reverses the logic of its argument',
      syntax: '=NOT(logical)',
      example: '=NOT(E5="Inactive")',
      useCase: 'Filter out inactive marketing channels'
    },
    {
      name: 'IFERROR',
      purpose: 'Returns a value you specify if a formula evaluates to an error; otherwise returns the result of the formula',
      syntax: '=IFERROR(value, value_if_error)',
      example: '=IFERROR(A5/B5, "Division by zero")',
      useCase: 'Prevent errors when calculating metrics like ROI when denominator might be zero'
    }
  ],
  lookup: [
    {
      name: 'VLOOKUP',
      purpose: 'Looks for a value in the leftmost column of a table, and then returns a value in the same row from a column you specify',
      syntax: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
      example: '=VLOOKUP("Facebook", A2:D20, 4, FALSE)',
      useCase: 'Find the performance metrics for a specific marketing channel'
    },
    {
      name: 'HLOOKUP',
      purpose: 'Looks for a value in the top row of a table and returns the value in the same column from a row you specify',
      syntax: '=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])',
      example: '=HLOOKUP("Q3", A1:E2, 2, FALSE)',
      useCase: 'Find quarterly marketing performance across a horizontal dataset'
    },
    {
      name: 'INDEX',
      purpose: 'Returns the value at a given position in a range or array',
      syntax: '=INDEX(array, row_num, [column_num])',
      example: '=INDEX(A1:D10, 5, 3)',
      useCase: 'Extract specific marketing data points from a table of results'
    },
    {
      name: 'MATCH',
      purpose: 'Returns the relative position of an item in an array that matches a specified value',
      syntax: '=MATCH(lookup_value, lookup_array, [match_type])',
      example: '=MATCH("Email", B1:B20, 0)',
      useCase: 'Find the position of a specific marketing channel in a list'
    },
    {
      name: 'CHOOSE',
      purpose: 'Uses an index number to return a value from a list of value arguments',
      syntax: '=CHOOSE(index_num, value1, [value2], ...)',
      example: '=CHOOSE(2, "Low", "Medium", "High")',
      useCase: 'Convert numerical ratings to text categories for marketing reports'
    }
  ],
  text: [
    {
      name: 'CONCATENATE',
      purpose: 'Joins several text strings into one text string',
      syntax: '=CONCATENATE(text1, [text2], ...)',
      example: '=CONCATENATE("Campaign: ", A5, " - ", B5)',
      useCase: 'Create descriptive labels for marketing campaigns by combining data'
    },
    {
      name: 'LEFT',
      purpose: 'Returns the specified number of characters from the start of a text string',
      syntax: '=LEFT(text, [num_chars])',
      example: '=LEFT(A5, 3)',
      useCase: 'Extract campaign prefix codes from campaign names'
    },
    {
      name: 'RIGHT',
      purpose: 'Returns the specified number of characters from the end of a text string',
      syntax: '=RIGHT(text, [num_chars])',
      example: '=RIGHT(B5, 4)',
      useCase: 'Extract year or date information from the end of campaign identifiers'
    },
    {
      name: 'MID',
      purpose: 'Returns a specific number of characters from a text string, starting at the position you specify',
      syntax: '=MID(text, start_num, num_chars)',
      example: '=MID(C5, 4, 6)',
      useCase: 'Extract specific segments from campaign tracking codes'
    },
    {
      name: 'LEN',
      purpose: 'Returns the number of characters in a text string',
      syntax: '=LEN(text)',
      example: '=LEN(D5)',
      useCase: 'Verify character counts for ad headlines or meta descriptions'
    },
    {
      name: 'UPPER',
      purpose: 'Converts text to uppercase',
      syntax: '=UPPER(text)',
      example: '=UPPER(E5)',
      useCase: 'Standardize campaign names for reporting consistency'
    },
    {
      name: 'LOWER',
      purpose: 'Converts text to lowercase',
      syntax: '=LOWER(text)',
      example: '=LOWER(F5)',
      useCase: 'Standardize URL parameters or email addresses'
    },
    {
      name: 'TRIM',
      purpose: 'Removes extra spaces from text',
      syntax: '=TRIM(text)',
      example: '=TRIM(G5)',
      useCase: 'Clean up imported marketing data with inconsistent spacing'
    }
  ],
  dateTime: [
    {
      name: 'TODAY',
      purpose: 'Returns the current date',
      syntax: '=TODAY()',
      example: '=TODAY()',
      useCase: 'Automatically update reports with current date or calculate days since campaign launch'
    },
    {
      name: 'NOW',
      purpose: 'Returns the current date and time',
      syntax: '=NOW()',
      example: '=NOW()',
      useCase: 'Timestamp marketing activities or calculate elapsed time'
    },
    {
      name: 'DATEDIF',
      purpose: 'Calculates the number of days, months, or years between two dates',
      syntax: '=DATEDIF(start_date, end_date, unit)',
      example: '=DATEDIF(A5, TODAY(), "D")',
      useCase: 'Calculate campaign duration or days remaining until campaign end'
    },
    {
      name: 'WEEKDAY',
      purpose: 'Returns the day of the week corresponding to a date',
      syntax: '=WEEKDAY(serial_number, [return_type])',
      example: '=WEEKDAY(B5, 1)',
      useCase: 'Analyze performance patterns by day of week'
    },
    {
      name: 'MONTH',
      purpose: 'Returns the month of a date represented by a serial number',
      syntax: '=MONTH(serial_number)',
      example: '=MONTH(C5)',
      useCase: 'Group marketing data by month for seasonal analysis'
    },
    {
      name: 'YEAR',
      purpose: 'Returns the year corresponding to a date',
      syntax: '=YEAR(serial_number)',
      example: '=YEAR(D5)',
      useCase: 'Filter or group marketing data by year'
    }
  ],
  conditional: [
    {
      name: 'COUNTIF',
      purpose: 'Counts the number of cells within a range that meet a single criterion',
      syntax: '=COUNTIF(range, criteria)',
      example: '=COUNTIF(A1:A100, "Facebook")',
      useCase: 'Count the number of Facebook campaigns in your marketing mix'
    },
    {
      name: 'COUNTIFS',
      purpose: 'Counts the number of cells within a range that meet multiple criteria',
      syntax: '=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
      example: '=COUNTIFS(A1:A100, "Facebook", B1:B100, ">1000")',
      useCase: 'Count Facebook campaigns with over 1000 impressions'
    },
    {
      name: 'SUMIF',
      purpose: 'Adds the cells specified by a given criteria',
      syntax: '=SUMIF(range, criteria, [sum_range])',
      example: '=SUMIF(A1:A100, "Email", C1:C100)',
      useCase: 'Sum all spending on email campaigns'
    },
    {
      name: 'SUMIFS',
      purpose: 'Adds the cells in a range that meet multiple criteria',
      syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
      example: '=SUMIFS(D1:D100, A1:A100, "Social", B1:B100, "Q3")',
      useCase: 'Sum conversions from social media campaigns in Q3'
    },
    {
      name: 'AVERAGEIF',
      purpose: 'Returns the average of all cells that meet a single criterion',
      syntax: '=AVERAGEIF(range, criteria, [average_range])',
      example: '=AVERAGEIF(A1:A100, "PPC", E1:E100)',
      useCase: 'Find the average click-through rate for PPC campaigns'
    },
    {
      name: 'AVERAGEIFS',
      purpose: 'Returns the average of all cells that meet multiple criteria',
      syntax: '=AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)',
      example: '=AVERAGEIFS(F1:F100, A1:A100, "Display", B1:B100, "Q4")',
      useCase: 'Find the average conversion rate for Display ads in Q4'
    }
  ],
  financial: [
    {
      name: 'NPV',
      purpose: 'Calculates the net present value of an investment using a discount rate and series of future payments and income',
      syntax: '=NPV(rate, value1, [value2], ...)',
      example: '=NPV(0.1, -10000, 3000, 4200, 6800)',
      useCase: 'Evaluate the long-term value of marketing investments'
    },
    {
      name: 'IRR',
      purpose: 'Returns the internal rate of return for a series of cash flows',
      syntax: '=IRR(values, [guess])',
      example: '=IRR(A1:A10)',
      useCase: 'Determine the efficiency of marketing spend over time'
    },
    {
      name: 'PMT',
      purpose: 'Calculates the payment for a loan based on constant payments and a constant interest rate',
      syntax: '=PMT(rate, nper, pv, [fv], [type])',
      example: '=PMT(0.08/12, 36, 25000)',
      useCase: 'Plan monthly budget allocations for marketing initiatives'
    },
    {
      name: 'PV',
      purpose: 'Returns the present value of an investment',
      syntax: '=PV(rate, nper, pmt, [fv], [type])',
      example: '=PV(0.08/12, 36, -1000)',
      useCase: 'Calculate how much to invest now to achieve future marketing goals'
    },
    {
      name: 'FV',
      purpose: 'Returns the future value of an investment',
      syntax: '=FV(rate, nper, pmt, [pv], [type])',
      example: '=FV(0.06/12, 24, -1000)',
      useCase: 'Project future value of consistent marketing investments'
    }
  ],
  advanced: [
    {
      name: 'RANK',
      purpose: 'Returns the rank of a number in a list of numbers',
      syntax: '=RANK(number, ref, [order])',
      example: '=RANK(B5, B$1:B$100, 0)',
      useCase: 'Rank marketing campaigns by performance metrics'
    },
    {
      name: 'PERCENTILE',
      purpose: 'Returns the k-th percentile of values in a range',
      syntax: '=PERCENTILE(array, k)',
      example: '=PERCENTILE(C1:C100, 0.9)',
      useCase: 'Identify top 10% performing marketing channels'
    },
    {
      name: 'INDIRECT',
      purpose: 'Returns the reference specified by a text string',
      syntax: '=INDIRECT(ref_text, [a1])',
      example: '=INDIRECT("A" & D5)',
      useCase: 'Create dynamic references to marketing data based on user selection'
    },
    {
      name: 'OFFSET',
      purpose: 'Returns a reference offset from a given reference',
      syntax: '=OFFSET(reference, rows, cols, [height], [width])',
      example: '=OFFSET(A1, 5, 2, 1, 3)',
      useCase: 'Create dynamic ranges for marketing dashboards that update automatically'
    }
  ]
};

