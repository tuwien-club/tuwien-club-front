/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {
  ConnectedPageType,
  SimpleTextField as TextField,
  SimpleRichTextField as RichTextField,
  IndexField,
  StreamField
} from '@snek-at/jaen'

import {CardBlock} from '../blocks'

const HomePage: ConnectedPageType = () => {
  return (
    <>
      <strong>SimpleTextField:</strong>
      <TextField name={'field1'} />
      <br />
      <strong>Another SimpleTextField:</strong>
      <TextField name={'field2'} />
      <br />

      <strong>RichTextField:</strong>
      <RichTextField name={'field3'} />
      <br />

      <strong>IndexField</strong>

      <IndexField
        outerElement={() => <div />}
        renderItem={(item, key, navigate) => (
          <p key={key}>
            Slug: {item.slug} Title: {item.title}{' '}
            <button onClick={() => navigate()}>Goto</button>
          </p>
        )}
      />
      <br />

      <strong>IndexField with fixed slug:</strong>

      <IndexField
        fixedSlug={'home'}
        outerElement={() => <div />}
        renderItem={(item, key, navigate) => (
          <p key={key}>
            Slug: {item.slug} Title: {item.title}{' '}
            <button onClick={() => navigate()}>Goto</button>
          </p>
        )}
      />
      <br />

      <strong>StreamField:</strong>

      <div style={{width: '50%', display: 'table'}}>
        <StreamField reverseOrder={false} name={'cards'} blocks={[CardBlock]} />
      </div>
      <br />

      <strong>StreamField with reversed order:</strong>
      <div style={{width: '50%', display: 'table'}}>
        <StreamField
          reverseOrder={true}
          name={'cards-reversed'}
          blocks={[CardBlock]}
        />
      </div>
    </>
  )
}

HomePage.PageType = 'HomePage'
HomePage.ChildPages = [HomePage]

export default HomePage
