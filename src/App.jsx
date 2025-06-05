import { useState, useMemo } from 'react'
import { Search, Menu, X, Calculator, TrendingUp, Filter, Calendar, DollarSign, Settings, User, Mail, Phone, Globe, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
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
        example: '=MID(C2, 5, 3) (Extract month from date string)',
        useCase: 'Extract middle portions, parse structured data, substring extraction.'
      },
      {
        name: 'LEN',
        purpose: 'Returns number of characters in text string.',
        syntax: '=LEN(text)',
        example: '=LEN(D2) (Length of campaign description)',
        useCase: 'Text validation, character limits, data quality checks.'
      },
      {
        name: 'UPPER',
        purpose: 'Converts text to uppercase.',
        syntax: '=UPPER(text)',
        example: '=UPPER(E2) (Convert platform name to uppercase)',
        useCase: 'Standardize text format, data consistency, display formatting.'
      },
      {
        name: 'LOWER',
        purpose: 'Converts text to lowercase.',
        syntax: '=LOWER(text)',
        example: '=LOWER(F2) (Convert to lowercase for matching)',
        useCase: 'Normalize data, case-insensitive comparisons, standardization.'
      },
      {
        name: 'TRIM',
        purpose: 'Removes extra spaces from text.',
        syntax: '=TRIM(text)',
        example: '=TRIM(G2) (Clean campaign names)',
        useCase: 'Data cleaning, remove formatting issues, standardize spacing.'
      }
    ],
    datetime: [
      {
        name: 'TODAY',
        purpose: 'Returns the current date.',
        syntax: '=TODAY()',
        example: '=TODAY() (Current date for reports)',
        useCase: 'Track campaign duration, calculate days since launch, aging reports.'
      },
      {
        name: 'NOW',
        purpose: 'Returns the current date and time.',
        syntax: '=NOW()',
        example: '=NOW() (Current timestamp)',
        useCase: 'Timestamp reports, track real-time updates, log activities.'
      },
      {
        name: 'DATEDIF',
        purpose: 'Calculates difference between two dates in various units.',
        syntax: '=DATEDIF(start_date, end_date, unit)',
        example: '=DATEDIF(A2, B2, "D") (Days between campaign start/end)',
        useCase: 'Campaign duration, customer lifetime, subscription periods.'
      },
      {
        name: 'WEEKDAY',
        purpose: 'Returns day of week as number (1-7).',
        syntax: '=WEEKDAY(serial_number, [return_type])',
        example: '=WEEKDAY(C2) (Day of week for campaign launch)',
        useCase: 'Analyze performance by day, schedule campaigns, weekend analysis.'
      },
      {
        name: 'MONTH',
        purpose: 'Returns month number (1-12) from a date.',
        syntax: '=MONTH(serial_number)',
        example: '=MONTH(D2) (Extract month from campaign date)',
        useCase: 'Monthly reporting, seasonal analysis, group by month.'
      },
      {
        name: 'YEAR',
        purpose: 'Returns year as 4-digit number from a date.',
        syntax: '=YEAR(serial_number)',
        example: '=YEAR(E2) (Extract year from transaction date)',
        useCase: 'Annual reports, year-over-year analysis, historical comparisons.'
      }
    ],
    conditional: [
      {
        name: 'COUNTIF',
        purpose: 'Counts cells that meet a single criteria.',
        syntax: '=COUNTIF(range, criteria)',
        example: '=COUNTIF(B2:B100, "Facebook") (Count Facebook campaigns)',
        useCase: 'Count campaigns by platform, leads by source, conversions by type.'
      },
      {
        name: 'COUNTIFS',
        purpose: 'Counts cells that meet multiple criteria.',
        syntax: '=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2]...)',
        example: '=COUNTIFS(B2:B100, "Google", C2:C100, ">1000") (Google campaigns >$1000)',
        useCase: 'Complex filtering, multi-condition analysis, segmented counting.'
      },
      {
        name: 'SUMIF',
        purpose: 'Sums cells that meet a single criteria.',
        syntax: '=SUMIF(range, criteria, [sum_range])',
        example: '=SUMIF(A2:A100, "Q1", D2:D100) (Sum Q1 revenue)',
        useCase: 'Total spend by platform, revenue by quarter, costs by campaign type.'
      },
      {
        name: 'SUMIFS',
        purpose: 'Sums cells that meet multiple criteria.',
        syntax: '=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)',
        example: '=SUMIFS(E2:E100, A2:A100, "Facebook", B2:B100, "Video") (Facebook video spend)',
        useCase: 'Complex budget analysis, multi-dimensional reporting, segmented totals.'
      },
      {
        name: 'AVERAGEIF',
        purpose: 'Calculates average of cells that meet a criteria.',
        syntax: '=AVERAGEIF(range, criteria, [average_range])',
        example: '=AVERAGEIF(C2:C100, "Mobile", F2:F100) (Average mobile CPC)',
        useCase: 'Average CPC by device, mean conversion rate by source, typical performance.'
      },
      {
        name: 'AVERAGEIFS',
        purpose: 'Calculates average of cells that meet multiple criteria.',
        syntax: '=AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2]...)',
        example: '=AVERAGEIFS(G2:G100, A2:A100, "Instagram", D2:D100, ">500") (Instagram CTR >500 impressions)',
        useCase: 'Complex performance analysis, segmented averages, conditional benchmarking.'
      }
    ],
    financial: [
      {
        name: 'NPV',
        purpose: 'Calculates net present value of investment based on discount rate and cash flows.',
        syntax: '=NPV(rate, value1, [value2], ...)',
        example: '=NPV(0.1, B2:B13) (NPV of monthly campaign returns)',
        useCase: 'Evaluate campaign profitability, investment decisions, long-term ROI.'
      },
      {
        name: 'IRR',
        purpose: 'Returns internal rate of return for series of cash flows.',
        syntax: '=IRR(values, [guess])',
        example: '=IRR(C2:C13) (Internal return rate of campaign)',
        useCase: 'Compare campaign efficiency, investment returns, profitability analysis.'
      },
      {
        name: 'PMT',
        purpose: 'Calculates payment for loan based on constant payments and interest rate.',
        syntax: '=PMT(rate, nper, pv, [fv], [type])',
        example: '=PMT(0.05/12, 36, 10000) (Monthly payment for equipment loan)',
        useCase: 'Budget planning, equipment financing, subscription modeling.'
      },
      {
        name: 'PV',
        purpose: 'Returns present value of investment based on future payments.',
        syntax: '=PV(rate, nper, pmt, [fv], [type])',
        example: '=PV(0.08, 10, 1000) (Present value of annual $1000 returns)',
        useCase: 'Value customer lifetime revenue, investment decisions, budget allocation.'
      },
      {
        name: 'FV',
        purpose: 'Returns future value of investment based on periodic payments.',
        syntax: '=FV(rate, nper, pmt, [pv], [type])',
        example: '=FV(0.06, 12, 500) (Future value of monthly $500 investments)',
        useCase: 'Project campaign growth, savings goals, compound return calculations.'
      }
    ],
    advanced: [
      {
        name: 'RANK',
        purpose: 'Returns rank of number in list of numbers.',
        syntax: '=RANK(number, ref, [order])',
        example: '=RANK(B2, B$2:B$100, 0) (Rank campaign performance)',
        useCase: 'Performance rankings, top performer identification, competitive analysis.'
      },
      {
        name: 'PERCENTILE',
        purpose: 'Returns k-th percentile of values in a range.',
        syntax: '=PERCENTILE(array, k)',
        example: '=PERCENTILE(C2:C100, 0.9) (90th percentile of conversion rates)',
        useCase: 'Performance benchmarks, outlier identification, statistical analysis.'
      },
      {
        name: 'INDIRECT',
        purpose: 'Returns reference specified by text string.',
        syntax: '=INDIRECT(ref_text, [a1])',
        example: '=INDIRECT("Sheet"&A2&"!B5") (Dynamic sheet reference)',
        useCase: 'Dynamic references, multi-sheet formulas, flexible reporting.'
      },
      {
        name: 'OFFSET',
        purpose: 'Returns reference offset from given reference.',
        syntax: '=OFFSET(reference, rows, cols, [height], [width])',
        example: '=OFFSET(A1, 2, 3, 1, 1) (Cell 2 rows down, 3 columns right)',
        useCase: 'Dynamic ranges, moving references, flexible data selection.'
      }
    ]
  }

  const categories = [
    { id: 'all', name: 'All Formulas', icon: Calculator, count: Object.values(formulaData).flat().length },
    { id: 'mathematical', name: 'Mathematical', icon: TrendingUp, count: formulaData.mathematical.length },
    { id: 'logical', name: 'Logical', icon: Filter, count: formulaData.logical.length },
    { id: 'lookup', name: 'Lookup & Reference', icon: Search, count: formulaData.lookup.length },
    { id: 'text', name: 'Text Functions', icon: Menu, count: formulaData.text.length },
    { id: 'datetime', name: 'Date & Time', icon: Calendar, count: formulaData.datetime.length },
    { id: 'conditional', name: 'Conditional', icon: Filter, count: formulaData.conditional.length },
    { id: 'financial', name: 'Financial', icon: DollarSign, count: formulaData.financial.length },
    { id: 'advanced', name: 'Advanced', icon: Settings, count: formulaData.advanced.length }
  ]

  const allFormulas = useMemo(() => {
    return Object.entries(formulaData).flatMap(([category, formulas]) =>
      formulas.map(formula => ({ ...formula, category }))
    )
  }, [])

  const filteredFormulas = useMemo(() => {
    let formulas = selectedCategory === 'all' ? allFormulas : allFormulas.filter(f => f.category === selectedCategory)
    
    if (searchTerm) {
      formulas = formulas.filter(formula =>
        formula.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formula.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formula.useCase.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return formulas
  }, [allFormulas, selectedCategory, searchTerm])

  const FormulaCard = ({ formula }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-blue-600">{formula.name}</h3>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">
          {formula.category}
        </span>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-1 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Purpose
          </h4>
          <p className="text-gray-600 text-sm">{formula.purpose}</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-1 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Syntax
          </h4>
          <code className="bg-gray-900 text-green-400 px-3 py-2 rounded text-sm block font-mono">
            {formula.syntax}
          </code>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-1 flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            Example
          </h4>
          <code className="bg-gray-800 text-blue-400 px-3 py-2 rounded text-sm block font-mono">
            {formula.example}
          </code>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-1 flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Marketing Use Case
          </h4>
          <p className="text-gray-600 text-sm">{formula.useCase}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Calculator className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Excel Formula Ebook</h1>
                <p className="text-sm text-gray-600">Complete Guide for Marketers</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search formulas..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button
                variant="outline"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="h-4 w-4" />
                        <span className="font-medium">{category.name}</span>
                      </div>
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar for Mobile */}
            <div className="md:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search formulas..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Results Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'all' ? 'All Excel Formulas' : categories.find(c => c.id === selectedCategory)?.name + ' Functions'}
              </h2>
              <p className="text-gray-600">
                {filteredFormulas.length} formula{filteredFormulas.length !== 1 ? 's' : ''} found
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Formula Grid */}
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {filteredFormulas.map((formula, index) => (
                <FormulaCard key={`${formula.name}-${index}`} formula={formula} />
              ))}
            </div>

            {filteredFormulas.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No formulas found</h3>
                <p className="text-gray-600">Try adjusting your search terms or selecting a different category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src={senithPortrait}
                alt="Senith Samaranayake"
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-200"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">About the Author</h3>
              <h4 className="text-xl text-blue-600 font-semibold mb-3">Senith Samaranayake</h4>
              <p className="text-gray-600 mb-4">
                Marketing analytics expert and entrepreneur passionate about empowering marketers with data-driven insights. 
                Specializing in Excel automation, dashboard creation, and performance optimization for marketing teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
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
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="text-center">
                <img
                  src={qrCode}
                  alt="Connect with Senith"
                  className="w-24 h-24 mx-auto mb-2"
                />
                <p className="text-sm text-gray-600">Scan to connect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-2">© 2024 Senith Samaranayake. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            Excel Formula Ebook for Marketers - Complete Reference Guide
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App

