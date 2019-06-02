const test = require('ava')
const Card = require('../lib/card')
const cardOptions = {
  type: 'malice',
  replaces: ['justice', 'neutrality'],
  combines: ['conviction', 'imitation']
}

test('it generates a new card', t => {
  const malice = new Card(cardOptions)
  t.is(malice.type, cardOptions.type, 'Type is correct')
  t.is(malice.replaces, cardOptions.replaces, 'Replaces is correct')
  t.is(malice.combines, cardOptions.combines, 'Combines is correct')
})

test('it can replace', t => {
  const malice = new Card(cardOptions)
  const justice = { type: 'justice' }
  t.is(true, malice.canReplace(justice), 'Malice can be replaced by justice')
})

test(`it can't replace`, t => {
  const malice = new Card(cardOptions)
  const liberation = { type: 'liberation' }
  t.is(false, malice.canReplace(liberation), `Malice can't be replaced by liberation`)
})

test('it can combine', t => {
  const malice = new Card(cardOptions)
  const conviction = { type: 'conviction' }
  t.is(true, malice.canCombine(conviction, 'Malice can be combined with conviction'))
})

test(`it can't combine`, t => {
  const malice = new Card(cardOptions)
  const liberation = { type: 'liberation' }
  t.is(false, malice.canCombine(liberation, `Malice can't be combined with liberation`))
})
