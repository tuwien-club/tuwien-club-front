import {BC, EditableField, RichTextField, prepareBlocks} from '@snek-at/jaen'
import {
  MDBIcon,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit'
import {useState} from 'react'

type StudyCardBlockFields = {title: string; text: string}

const StudyCardBlock: BC<StudyCardBlockFields> = ({
  fieldOptions,
  streamFieldWidth
}) => {
  const blocks = prepareBlocks<StudyCardBlockFields>(
    StudyCardBlock,
    fieldOptions
  )
  const [showShow, setShowShow] = useState('collapse0')

  const index = 1
  // const studies = pageContent.studies.reduce((s: any, t: any) => {
  //   s[t.study.studyType] = [...(s[t.study.studyType] || []), t]
  //   return s
  // }, {})
  return (
    <>
      <MDBCard
        style={{width: streamFieldWidth}}
        className="accordion-item mt-3">
        <MDBCardHeader
          className="accordion-header d-flex justify-content-between"
          onClick={() =>
            showShow === `collapse${index}`
              ? setShowShow('collapse')
              : setShowShow(`collapse${index}`)
          }>
          {blocks['title']}
          <MDBIcon
            icon={showShow === `collapse${index}` ? 'angle-up' : 'angle-down'}
          />
        </MDBCardHeader>
        <MDBCollapse show={showShow === `collapse${index}`}>
          <MDBCardBody className="accordion-body">{blocks['text']}</MDBCardBody>
        </MDBCollapse>
      </MDBCard>
    </>
  )
}

StudyCardBlock.BlockType = 'StudyCardBlock'
StudyCardBlock.BlockFields = {
  title: EditableField,
  text: RichTextField
}

export default StudyCardBlock
