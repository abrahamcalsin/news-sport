import dayjs from 'dayjs'

interface DateFormatProps {
  date?: Parameters<typeof dayjs>['0']
  locale: 'en' | 'es'
  dateFormat?: string
}

export type { DateFormatProps }
