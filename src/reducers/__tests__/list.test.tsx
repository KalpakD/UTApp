import list from 'reducers/list';

describe('list reducer', () => {
  let initialStore = {data: []};
  const mockResponse = [
    {
      idLeague: '4328',
      strLeague: 'English Premier League',
      strSport: 'Soccer',
      strLeagueAlternate: 'Premier League, EPL',
    },
    {
      idLeague: '4329',
      strLeague: 'English League Championship',
      strSport: 'Soccer',
      strLeagueAlternate: 'Championship',
    },
  ];

  test('api call response', () => {
    expect(
      list(initialStore, {type: 'GET_LIST_DATA', payload: mockResponse}),
    ).toEqual({
      ...initialStore,
      data: mockResponse,
    });
  });
});
