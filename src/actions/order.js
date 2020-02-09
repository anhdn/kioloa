import { loadDB } from './db'

export const GET_STORES = Symbol('GET_STORES')
export const GET_STORES_SUCCESS = Symbol('GET_STORES_SUCCESS')
export const GET_STORES_FAIL = Symbol('GET_STORES_FAIL')

export async function createOrder () {
  const db = await loadDB()
  // Add a new document with a generated id.
  db.firestore().collection('orders').add({
    name: 'Tokyo',
    country: 'Japan'
  }).then(ref => {
    console.log('Added document with ID: ', ref.id)
  })
}
