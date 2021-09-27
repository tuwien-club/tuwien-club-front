/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {createReducer} from '@reduxjs/toolkit'

import {decrease, increase} from '../actions/counter'
import {CounterSate} from '../types'

const initialState: CounterSate = {
  counter: 0
}

const counterReducer = createReducer(initialState, {
  [increase.type]: (state, _action) => {
    state.counter += 1
  },
  [decrease.type]: (state, _action) => {
    state.counter -= 1
  }
})

export default counterReducer
