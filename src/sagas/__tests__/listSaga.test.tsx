import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import {apiCallFunc, getList} from 'sagas/listSaga';

jest.mock('axios');

describe('list api Saga', () => {
  const action = null;

  const mockResponse = {
    leagues: [
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
    ],
  };
  const apiResponse = {status: 200, data: mockResponse};
  it('Should Call List API', () => {
    const generator = apiCallFunc(action);
    generator.next();
    // expect(getList()).toBeDefined();
    const next = generator.next(apiResponse);
    expect(next.value).toEqual(
      put({type: 'GET_LIST_DATA', payload: mockResponse.leagues}),
    );
    generator.next();
  });
  it('fetches successfully data from an API', async () => {
    const data = mockResponse;
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getList()).resolves.toEqual(data);
  });
});
