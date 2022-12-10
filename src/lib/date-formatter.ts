import dayjs from 'dayjs'

import { DateFormatProps } from '~/typings/components/date-format'

export const dateFormatter = (
  date: DateFormatProps['date'],
  locale: DateFormatProps['locale'],
  dateFormat: DateFormatProps['dateFormat'],
) => {
  const formattedDate = dayjs(date).locale(locale).format(dateFormat)

  return formattedDate
}
