import {
  BC,
  EditableField,
  RichTextField,
  IndexField,
  prepareBlocks
} from '@snek-at/jaen'
import {
  MDBIcon,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBNavbarLink
} from 'mdb-react-ui-kit'
import {useState} from 'react'

type GroupsCardBlockFields = {title: string; text: string}

const GroupsCardBlock: BC<GroupsCardBlockFields> = ({
  fieldOptions,
  streamFieldWidth
}) => {
  const blocks = prepareBlocks<GroupsCardBlockFields>(
    GroupsCardBlock,
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
          <MDBCardBody className="accordion-body">
            {blocks['text']}
            <IndexField
              fixedSlug={'groups'}
              outerElement={() => <div />}
              renderItem={(item, key, navigate) => (
                <p key={key}>
                  {/* Slug: {item.slug} Title: {item.title}{' '} */}
                  <MDBNavbarLink aria-current="page" onClick={() => navigate()}>
                    {item.title}
                  </MDBNavbarLink>
                </p>
              )}
            />
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>
    </>
  )
}

GroupsCardBlock.BlockType = 'GroupsCardBlock'
GroupsCardBlock.BlockFields = {
  title: EditableField,
  text: RichTextField
}

export default GroupsCardBlock
