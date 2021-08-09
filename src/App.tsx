/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {CMSProvider} from '@snek-at/jaen'

import '~/common/css/base.scss'

import {
  ContactPage,
  FaqPage,
  GroupsPage,
  HomePage,
  HowtoPage,
  RulesPage,
  StudyPage
} from './tuwien_club/pages'

const App: React.FC = () => {
  return (
    <div>
      <CMSProvider
        settings={{gitRemote: process.env.REACT_APP_JAEN_GIT_REMOTE}}
        pages={[
          ContactPage,
          FaqPage,
          GroupsPage,
          HomePage,
          HowtoPage,
          RulesPage,
          StudyPage
        ]}></CMSProvider>
    </div>
  )
}

export default App
