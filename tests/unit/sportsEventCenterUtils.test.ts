import {
  formatSportsEventLocalStartLabels,
  formatSportsEventStartLabels,
  formatSportsRelatedGameStartLabel,
} from '@/app/[locale]/(platform)/sports/_components/sports-event-center-utils'

describe('sportsEventCenterUtils', () => {
  it('formats event hero start labels in ET', () => {
    expect(formatSportsEventStartLabels(Date.parse('2026-06-09T12:00:00.000Z'), 'en-US')).toEqual({
      timeLabel: '8:00 AM ET',
      dayLabel: 'June 9',
    })
  })

  it('formats event hero local start labels with the browser time zone', () => {
    expect(formatSportsEventLocalStartLabels(
      Date.parse('2026-06-09T12:00:00.000Z'),
      'en-US',
      'America/Sao_Paulo',
    )).toEqual({
      timeLabel: '9:00 AM',
      dayLabel: 'June 9',
    })
  })

  it('formats related game start labels without locale-specific connector text', () => {
    expect(formatSportsRelatedGameStartLabel(
      new Date('2026-07-10T19:00:00.000Z'),
      'en',
    )).toBe('Jul 10, 7:00 PM')
  })
})
