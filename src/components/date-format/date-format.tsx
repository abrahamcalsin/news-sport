import 'dayjs/locale/en'
import 'dayjs/locale/es'
import * as React from 'react'
import { Text } from '@chakra-ui/react'

import { dateFormatter } from '~/lib/date-formatter'
import { DateFormatProps } from '~/typings/components/date-format'

export default function DateFormat(props: DateFormatProps) {
  const { date, locale, dateFormat } = props

  const formattedDate = dateFormatter(date, locale, dateFormat)

  return (
    <Text as="span" textColor="inherit">
      {formattedDate}
    </Text>
  )
}

DateFormat.defaultProps = {
  locale: 'EN',
}
