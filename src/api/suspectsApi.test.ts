import {
  getAllSuspects,
  getSuspectById,
  editSuspect,
  saveSuspect,
  deleteSuspect
} from './suspectsApi';
import { ISuspect } from '../utils/types';

// need json-server turned on
test('gets all suspects', async () => {
  const response = await getAllSuspects();
  expect(response.data).toBeDefined();
});
test('get suspect by id', async () => {
  const response = await getSuspectById('6214589d7b9d5b4eda363b4c');
  expect(response.data).toBeDefined();
  expect(response.data[0].age).toBe(37);
});
test('save suspects', async () => {
  const newSuspect: ISuspect = {
    name: 'john'
  };
  const response = await saveSuspect(newSuspect);
  expect(response.status).toBe(201);
}, 10000);
