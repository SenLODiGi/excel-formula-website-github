import { useState, useMemo } from 'react'
import { Search, Menu, X, Calculator, TrendingUp, Filter, Calendar, DollarSign, Settings, User, Mail, Phone, Globe, ExternalLink } from 'lucide-react'
import { Button } from './components/Button.jsx'
import './App.css'

// Import assets
import senithPortrait from './assets/senith_portrait.png'
import qrCode from './assets/senith_samaranayake.png'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Complete formula data organized by categories
  const formulaData = {
    mathematical: [
      {
        name: 'SUM',
        purpose: 'Calculates the total of a range of numbers.',
        syntax: '=SUM(number1, [number2], ...) or =SUM(range)',
        example: '=SUM(B2:B4) (Sums budgets in cells B2 to B4)',
        useCase: 'Total marketing campaign budgets, sum of expenses, revenue totals.'
      },
      {
        name: 'AVERAGE',
        purpose: 'Calculates the arithmetic mean of a range of numbers.',
        syntax: '=AVERAGE(number1, [number2], ...) or =AVERAGE(range)',
        example: '=AVERAGE(C2:C100) (Average conversion rate)',
        useCase: 'Average CPC, mean conversion rates, typical performance metrics.'
      },
      {
        name: 'COUNT',
        purpose: 'Counts the number of cells containing numbers.',
        syntax: '=COUNT(value1, [value2], ...)',
        example: '=COUNT(D2:D100) (Count campaigns with numeric data)',
        useCase: 'Count active campaigns, number of data points, valid entries.'
      },
      {
        name: 'MAX',
        purpose: 'Returns the largest value in a set of values.',
        syntax: '=MAX(number1, [number2], ...) or =MAX(range)',
        example: '=MAX(E2:E100) (Highest campaign spend)',
        useCase: 'Peak performance identification, maximum budget, highest ROI.'
      },
      {
        name: 'MIN',
        purpose: 'Returns the smallest value in a set of values.',
        syntax: '=MIN(number1, [number2], ...) or =MIN(range)',
        example: '=MIN(F2:F100) (Lowest cost per click)',
        useCase: 'Best performing campaigns, minimum thresholds, cost optimization.'
      },
      {
        name: 'MEDIAN',
        purpose: 'Returns the median (middle) value in a range of numbers.',
        syntax: '=MEDIAN(number1, [number2], ...) or =MEDIAN(range)',
        example: '=MEDIAN(G2:G100) (Median click-through rate)',
        useCase: 'Typical performance metrics, outlier-resistant averages.'
      },
      {
        name: 'ROUND',
        purpose: 'Rounds a number to specified number of digits.',
        syntax: '=ROUND(number, num_digits)',
        example: '=ROUND(H2, 2) (Round to 2 decimal places)',
        useCase: 'Clean data presentation, currency formatting, percentage display.'
      },
      {
        name: 'POWER',
        purpose: 'Returns the result of a number raised to a power.',
        syntax: '=POWER(number, power)',
        example: '=POWER(1.05, 12) (Compound growth calculation)',
        useCase: 'Growth projections, compound interest, exponential calculations.'
      }
    ],
    logical: [
      {
        name: 'IF',
        purpose: 'Returns one value if condition is true, another if false.',
        syntax: '=IF(logical_test, value_if_true, value_if_false)',
        example: '=IF(B2>1000, "High Budget", "Low Budget")',
        useCase: 'Campaign categorization, performance classification, conditional formatting.'
      },
      {
        name: 'AND',
        purpose: 'Returns TRUE if all arguments are TRUE.',
        syntax: '=AND(logical1, [logical2], ...)',
        example: '=AND(C2>0.05, D2<10) (CTR>5% AND CPC<$10)',
        useCase: 'Multi-criteria filtering, complex conditions, quality checks.'
      },
      {
        name: 'OR',
        purpose: 'Returns TRUE if any argument is TRUE.',
        syntax: '=OR(logical1, [logical2], ...)',
        example: '=OR(E2="Facebook", E2="Instagram") (Social platforms)',
        useCase: 'Platform grouping, alternative conditions, flexible criteria.'
      },
      {
        name: 'NOT',
        purpose: 'Reverses the logic of its argument.',
        syntax: '=NOT(logical)',
        example: '=NOT(F2="") (Check if cell is not empty)',
        useCase: 'Exclude conditions, reverse logic, data validation.'
      },
      {
        name: 'IFERROR',
        purpose: 'Returns specified value if formula results in error.',
        syntax: '=IFERROR(value, value_if_error)',
        example: '=IFERROR(G2/H2, 0) (Avoid division by zero)',
        useCase: 'Error handling, clean data display, robust calculations.'
      }
    ],
    lookup: [
      {
        name: 'VLOOKUP',
        purpose: 'Searches for value in first column and returns value from specified column.',
        syntax: '=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])',
        example: '=VLOOKUP(A2, CampaignData, 3, FALSE) (Find campaign budget)',
        useCase: 'Campaign data lookup, price matching, reference tables.'
      },
      {
        name: 'HLOOKUP',
        purpose: 'Searches for value in top row and returns value from specified row.',
        syntax: '=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])',
        example: '=HLOOKUP(B2, MonthlyData, 2, FALSE) (Find monthly performance)',
        useCase: 'Time-series data lookup, horizontal data structures.'
      },
      {
        name: 'INDEX',
        purpose: 'Returns value at intersection of specified row and column.',
        syntax: '=INDEX(array, row_num, [column_num])',
        example: '=INDEX(C2:E100, 5, 2) (Value at row 5, column 2)',
        useCase: 'Flexible data retrieval, dynamic references, array navigation.'
      },
      {
        name: 'MATCH',
        purpose: 'Returns relative position of item in array.',
        syntax: '=MATCH(lookup_value, lookup_array, [match_type])',
        example: '=MATCH("Google", A2:A100, 0) (Find Google position)',
        useCase: 'Position finding, dynamic indexing, data location.'
      },
      {
        name: 'CHOOSE',
        purpose: 'Returns value from list based on index number.',
        syntax: '=CHOOSE(index_num, value1, [value2], ...)',
        example: '=CHOOSE(A2, "Q1", "Q2", "Q3", "Q4") (Quarter names)',
        useCase: 'Dynamic labeling, conditional values, lookup alternatives.'
      }
    ],
    text: [
      {
        name: 'CONCATENATE',
        purpose: 'Joins several text strings into one string.',
        syntax: '=CONCATENATE(text1, [text2], ...)',
        example: '=CONCATENATE(A2, " - ", B2) (Campaign name with platform)',
        useCase: 'Create campaign names, combine data fields, generate labels.'
      },
      {
        name: 'LEFT',
        purpose: 'Returns specified number of characters from start of text.',
        syntax: '=LEFT(text, [num_chars])',
        example: '=LEFT(A2, 3) (First 3 characters of campaign ID)',
        useCase: 'Extract prefixes, campaign codes, data parsing.'
      },
      {
        name: 'RIGHT',
        purpose: 'Returns specified number of characters from end of text.',
        syntax: '=RIGHT(text, [num_chars])',
        example: '=RIGHT(B2, 4) (Last 4 characters for year)',
        useCase: 'Extract suffixes, date components, ID parsing.'
      },
      {
        name: 'MID',
        purpose: 'Returns specific number of characters from middle of text.',
        syntax: '=MID(text, start_num, num_chars)',
        example: '=MID(C2, 4, 3) (Extract 3 chars starting at position 4)',
        useCase: 'Extract middle portions, parse structured IDs, data extraction.'
      },
      {
        name: 'LEN',
        purpose: 'Returns the number of characters in a text string.',
        syntax: '=LEN(text)',
        example: '=LEN(D2) (Count characters in campaign name)',
        useCase: 'Text length validation, character counting, data quality checks.'
      },
      {
        name: 'UPPER',
        purpose: 'Converts text to uppercase.',
        syntax: '=UPPER(text)',
        example: '=UPPER(E2) (Convert to uppercase)',
        useCase: 'Standardize text format, data cleaning, consistent naming.'
      },
      {
        name: 'LOWER',
        purpose: 'Converts text to lowercase.',
        syntax: '=LOWER(text)',
        example: '=LOWER(F2) (Convert to lowercase)',
        useCase: 'Normalize text data, email formatting, consistent casing.'
      },
      {
        name: 'TRIM',
        purpose: 'Removes extra spaces from text.',
        syntax: '=TRIM(text)',
        example: '=TRIM(G2) (Remove extra spaces)',
        useCase: 'Clean imported data, remove formatting issues, data standardization.'
      }
    ],
    datetime: [
      {
        name: 'TODAY',
        purpose: 'Returns current date.',
        syntax: '=TODAY()',
        example: '=TODAY() (Current date)',
        useCase: 'Campaign date tracking, age calculations, current reporting.'
      },
      {
        name: 'NOW',
        purpose: 'Returns current date and time.',
        syntax: '=NOW()',
        example: '=NOW() (Current date and time)',
        useCase: 'Timestamp creation, real-time reporting, data freshness tracking.'
      },
      {
        name: 'DATEDIF',
        purpose: 'Calculates difference between two dates.',
        syntax: '=DATEDIF(start_date, end_date, unit)',
        example: '=DATEDIF(A2, TODAY(), "D") (Days since campaign start)',
        useCase: 'Campaign duration, age calculations, time-based analysis.'
      },
      {
        name: 'WEEKDAY',
        purpose: 'Returns day of week as number.',
        syntax: '=WEEKDAY(serial_number, [return_type])',
        example: '=WEEKDAY(B2) (Day of week for campaign date)',
        useCase: 'Day-of-week analysis, scheduling, performance by weekday.'
      },
      {
        name: 'MONTH',
        purpose: 'Returns month from date.',
        syntax: '=MONTH(serial_number)',
        example: '=MONTH(C2) (Extract month from date)',
        useCase: 'Monthly grouping, seasonal analysis, period reporting.'
      },
      {
        name: 'YEAR',
        purpose: 'Returns year from date.',
        syntax: '=YEAR(serial_number)',
        example: '=YEAR(D2) (Extract year from date)',
        useCase: 'Annual reporting, year-over-year analysis, historical grouping.'
      }
    ],
    conditional: [
      {
        name: 'COUNTIF',
        purpose: 'Counts cells meeting single criteria.',
        syntax: '=COUNTIF(range, criteria)',
        example: '=COUNTIF(A2:A100, "Facebook") (Count Facebook campaigns)',
        useCase: 'Platform counting, status tracking, criteria-based analysis.'
      },
      {
        name: 'COUNTIFS',
        purpose: 'Counts cells meeting multiple criteria.',
        syntax: '=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]...)',
        example: '=COUNTIFS(A2:A100, "Facebook", B2:B100, ">1000") (Facebook campaigns >$1000)',
        useCase: 'Complex filtering, multi-condition counting, advanced segmentation.'
      },
      {
        name: 'SUMIF',
        purpose: 'Sums cells meeting single criteria.',
        syntax: '=SUMIF(range, criteria, [sum_range])',
        example: '=SUMIF(A2:A100, "Google", C2:C100) (Sum Google campaign costs)',
        useCase: 'Platform-specific totals, conditional summation, targeted analysis.'
      },
      {
        name: 'SUMIFS',
        purpose: 'Sums cells meeting multiple criteria.',
        syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)',
        example: '=SUMIFS(C2:C100, A2:A100, "Google", B2:B100, ">0.05") (Google campaigns with CTR>5%)',
        useCase: 'Complex conditional sums, multi-criteria analysis, advanced reporting.'
      },
      {
        name: 'AVERAGEIF',
        purpose: 'Averages cells meeting single criteria.',
        syntax: '=AVERAGEIF(range, criteria, [average_range])',
        example: '=AVERAGEIF(A2:A100, "Facebook", D2:D100) (Average Facebook CPC)',
        useCase: 'Platform performance averages, conditional means, comparative analysis.'
      },
      {
        name: 'AVERAGEIFS',
        purpose: 'Averages cells meeting multiple criteria.',
        syntax: '=AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)',
        example: '=AVERAGEIFS(D2:D100, A2:A100, "Facebook", C2:C100, ">0.03") (Facebook avg CPC where CTR>3%)',
        useCase: 'Complex conditional averages, multi-criteria performance analysis.'
      }
    ],
    financial: [
      {
        name: 'NPV',
        purpose: 'Calculates net present value of investment.',
        syntax: '=NPV(rate, value1, [value2], ...)',
        example: '=NPV(0.1, -1000, 300, 400, 500) (NPV of campaign investment)',
        useCase: 'Campaign ROI analysis, investment evaluation, financial planning.'
      },
      {
        name: 'IRR',
        purpose: 'Calculates internal rate of return.',
        syntax: '=IRR(values, [guess])',
        example: '=IRR(A2:A6) (IRR of cash flows)',
        useCase: 'Return rate calculation, investment comparison, profitability analysis.'
      },
      {
        name: 'PMT',
        purpose: 'Calculates payment for loan based on constant payments.',
        syntax: '=PMT(rate, nper, pv, [fv], [type])',
        example: '=PMT(0.05/12, 60, 10000) (Monthly payment for loan)',
        useCase: 'Budget planning, financing calculations, payment scheduling.'
      },
      {
        name: 'PV',
        purpose: 'Calculates present value of investment.',
        syntax: '=PV(rate, nper, pmt, [fv], [type])',
        example: '=PV(0.08, 10, -1000) (Present value of annuity)',
        useCase: 'Investment valuation, budget planning, financial analysis.'
      },
      {
        name: 'FV',
        purpose: 'Calculates future value of investment.',
        syntax: '=FV(rate, nper, pmt, [pv], [type])',
        example: '=FV(0.06, 10, -200, -500) (Future value of investment)',
        useCase: 'Growth projections, investment planning, financial forecasting.'
      }
    ],
    advanced: [
      {
        name: 'RANK',
        purpose: 'Returns rank of number in list.',
        syntax: '=RANK(number, ref, [order])',
        example: '=RANK(B2, B$2:B$100, 0) (Rank campaign performance)',
        useCase: 'Performance ranking, competitive analysis, top performer identification.'
      },
      {
        name: 'PERCENTILE',
        purpose: 'Returns percentile of array.',
        syntax: '=PERCENTILE(array, k)',
        example: '=PERCENTILE(C2:C100, 0.9) (90th percentile of CTR)',
        useCase: 'Performance benchmarking, statistical analysis, outlier identification.'
      },
      {
        name: 'INDIRECT',
        purpose: 'Returns reference specified by text string.',
        syntax: '=INDIRECT(ref_text, [a1])',
        example: '=INDIRECT("Sheet"&A2&"!B1") (Dynamic sheet reference)',
        useCase: 'Dynamic references, flexible formulas, advanced data modeling.'
      },
      {
        name: 'OFFSET',
        purpose: 'Returns reference offset from given reference.',
        syntax: '=OFFSET(reference, rows, cols, [height], [width])',
        example: '=OFFSET(A1, 2, 3, 1, 1) (Cell 2 rows down, 3 columns right)',
        useCase: 'Dynamic ranges, flexible data selection, advanced calculations.'
      }
    ]
  }

  // Category information with icons and colors
  const categories = {
    all: { name: 'All Formulas', icon: Calculator, color: 'blue', count: 0 },
    mathematical: { name: 'Mathematical', icon: TrendingUp, color: 'orange', count: 0 },
    logical: { name: 'Logical', icon: Filter, color: 'purple', count: 0 },
    lookup: { name: 'Lookup & Reference', icon: Search, color: 'teal', count: 0 },
    text: { name: 'Text Functions', icon: Settings, color: 'pink', count: 0 },
    datetime: { name: 'Date & Time', icon: Calendar, color: 'indigo', count: 0 },
    conditional: { name: 'Conditional', icon: Filter, color: 'red', count: 0 },
    financial: { name: 'Financial', icon: DollarSign, color: 'green', count: 0 },
    advanced: { name: 'Advanced', icon: Settings, color: 'gray', count: 0 }
  }

  // Calculate counts and flatten formulas
  const allFormulas = useMemo(() => {
    const formulas = []
    Object.keys(formulaData).forEach(category => {
      categories[category].count = formulaData[category].length
      formulaData[category].forEach(formula => {
        formulas.push({ ...formula, category })
      })
    })
    categories.all.count = formulas.length
    return formulas
  }, [])

  // Filter formulas based on search and category
  const filteredFormulas = useMemo(() => {
    return allFormulas.filter(formula => {
      const matchesSearch = formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formula.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formula.useCase.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || formula.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [allFormulas, searchTerm, selectedCategory])

  const FormulaCard = ({ formula }) => {
    const categoryInfo = categories[formula.category]
    const IconComponent = categoryInfo.icon

    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-blue-600">{formula.name}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${categoryInfo.color}-100 text-${categoryInfo.color}-800`}>
            {categoryInfo.name}
          </span>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-600 mb-1 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Purpose
            </h4>
            <p className="text-gray-700">{formula.purpose}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-green-600 mb-1 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Syntax
            </h4>
            <code className="bg-gray-900 text-green-400 p-3 rounded-md block text-sm font-mono">
              {formula.syntax}
            </code>
          </div>
          
          <div>
            <h4 className="font-semibold text-purple-600 mb-1 flex items-center">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              Example
            </h4>
            <code className="bg-gray-900 text-blue-400 p-3 rounded-md block text-sm font-mono">
              {formula.example}
            </code>
          </div>
          
          <div>
            <h4 className="font-semibold text-orange-600 mb-1 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Marketing Use Case
            </h4>
            <p className="text-gray-700">{formula.useCase}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Calculator className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Excel Formula Ebook</h1>
                <p className="text-sm text-gray-600">Complete Guide for Marketers</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search formulas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search formulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {Object.entries(categories).map(([key, category]) => {
                  const IconComponent = category.icon
                  const isActive = selectedCategory === key
                  
                  return (
                    <Button
                      key={key}
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-between text-left ${
                        isActive 
                          ? `bg-${category.color}-600 text-white hover:bg-${category.color}-700` 
                          : `hover:bg-${category.color}-50 text-gray-700`
                      }`}
                      onClick={() => setSelectedCategory(key)}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-4 w-4" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        isActive 
                          ? 'bg-white/20 text-white' 
                          : `bg-${category.color}-100 text-${category.color}-800`
                      }`}>
                        {category.count}
                      </span>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all' ? 'All Excel Formulas' : categories[selectedCategory].name}
              </h2>
              <p className="text-gray-600">
                {filteredFormulas.length} formula{filteredFormulas.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Formula Grid */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {filteredFormulas.map((formula, index) => (
                <FormulaCard key={`${formula.category}-${formula.name}-${index}`} formula={formula} />
              ))}
            </div>

            {filteredFormulas.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No formulas found</h3>
                <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <img
                src={senithPortrait}
                alt="Senith Samaranayake"
                className="w-32 h-32 rounded-full border-4 border-blue-200 object-cover"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">About the Author</h3>
              <h4 className="text-xl text-blue-600 font-semibold mb-3">Senith Samaranayake</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Marketing analytics expert and entrepreneur passionate about empowering marketers with data-driven 
                insights. Specializing in Excel automation, dashboard creation, and performance optimization for 
                marketing teams.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="h-4 w-4" />
                  <span>www.startupduo.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>senith@startupduo.org</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>071 0 120 130</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <User className="h-4 w-4" />
                  <span>Sri Lanka</span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 text-center">
              <img
                src={qrCode}
                alt="Connect with Senith"
                className="w-32 h-32 mx-auto mb-3"
              />
              <p className="text-sm text-gray-600">Scan to Connect</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© 2024 Senith Samaranayake. All rights reserved.</p>
            <p className="mt-1">
              Let's explore how we can empower the next generation, together. Contact us to discuss partnership opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

