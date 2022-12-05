/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {BC, EditableField, RichTextField, prepareBlocks} from '@snek-at/jaen'

type CardBlockFields = {title: string; extra: string; text: string}

const CardBlock: BC<CardBlockFields> = ({fieldOptions, streamFieldWidth}) => {
  const blocks = prepareBlocks<CardBlockFields>(CardBlock, fieldOptions)

  return (
    <>
      <div style={{width: streamFieldWidth}}>
        Title: {blocks['title']}
        Text: {blocks['text']}
        Extra: {blocks['extra']}
      </div>
    </>
  )
}

CardBlock.BlockType = 'CardBlock'
CardBlock.BlockFields = {
  title: EditableField,
  extra: EditableField,
  text: RichTextField
}

export default CardBlock
