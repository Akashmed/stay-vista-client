/* eslint-disable react/prop-types */
import { DateRange } from 'react-date-range'

const Calendar = ({ value, handleChange }) => {
  return (
    <DateRange
      onChange={handleChange}
      rangeColors={['#F43F5E']}
      ranges={[value]}
      direction='vertical'
      showDateDisplay={false}
      
    />
  )
}

export default Calendar