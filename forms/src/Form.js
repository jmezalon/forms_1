import React from 'react';
import Radio from "./Radio.js";
import Selects from "./Selects.js";
import Checkbox from "./Checkboxs.js"


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      reason: "",
      diet: "",
      country: "",
      formConfirm: false,
      formCompleted: false,
      formSubmitted: false,
      underwater: "",
      marital_status: "",
      stress_level: "",
      claustrophobic: "",
      checkbox_disease: {
        cancer: false,
        heart_disease: false,
        diabetes: false
      },
      education_other: "",
      education: {
        high_school: false,
        associates: false,
        bachelors: false,
        masters: false,
        phd: false,
      },
      family: {
        siblings: false,
        parents: false,
        grandparents: false
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      formCompleted: true
    })
  }

  handdleFormConfirm = (event) => {
    event.preventDefault()
    this.setState({
      formConfirm: true
    })
  }

  handleCheckboxChange = (event) => {
    event.stopPropagation()
    let checkedItems = this.state[event.target.name]
    checkedItems[event.target.id] = event.target.checked
    this.setState({
      [event.target.name]: checkedItems
    })
  }



  handleConfirm = (event) => {
    event.preventDefault()
    this.setState({
      formSubmitted: true
    })
  }


  render() {
    const { name, family, reason, underwater, marital_status, stress_level, claustrophobic, formCompleted, formSubmitted, diet, country, birthday, checkbox_disease, education_other, education, formConfirm } = this.state;



    if(!formConfirm) {
    return (
        <>
        <h1>Mission to Mars Registration Form</h1>
          <div>
            <form className="form" onChange={this.handleChange}>

            <label htmlFor="name" >Name <abbr title="required">*</abbr></label>
            <input name="name" type="text" placeholder="Full Name" value={name} id="name"/>


            <Selects handleSelect={this.handleChange}
              birthday={this.state.birthday}
              diet={this.state.diet}
              country={this.state.country}
            />

            <label htmlFor="yourReason">Why do want to be a Mars Explorer?</label>
            <textarea rows='5' cols='25' wrap='soft' overflow='scroll'  name="reason" placeholder="explain why we should select you!" type="text" id="reason" value={reason} />


              <Radio handleRadioChange={this.handleChange}  underwater={this.state.underwater}
              marital_status={this.state.marital_status}
              stress_level={this.state.stress_level}
              claustrophobic={this.state.claustrophobic}
              />

              <Checkbox
              handleFollowUpQuestion={this.handleFollowUpQuestion}
              handleCheckboxChange={this.handleCheckboxChange}
              family={this.state.family}
              checkbox_disease={this.state.checkbox_disease}
              education={this.state.education}
              education_other={this.state.educational_other}
              />


              <button onClick={this.handdleFormConfirm}>Submit</button>


              </form>
            </div>

            </>
          )
        } else if (!formSubmitted) {
          return (

            <div className="formSubmit">
              <p>{formConfirm ? `
                Your name: ${name}
                DOB: ${birthday}
                Diet: ${diet}
                Reason: ${reason}
                Country: ${country}
                longevity: ${underwater}
                Marital Status: ${marital_status}
                family siblings: ${family.siblings}
                parents: ${family.parents}
                grandparents: ${family.grandparents}
                stress_level: ${stress_level}
                claustrophobic: ${claustrophobic}
                do you have cancer: ${checkbox_disease.cancer}
                Heart Disease: ${checkbox_disease.heart_disease}
                Diabetes: ${checkbox_disease.diabetes}
                Other education: ${education_other}
                Do you have an associate: ${education.associates}
                batchelor: ${education.bachelors}
                masters: ${education.masters}
                PhD: ${education.phd}
                is the information correct?` : ""}
              </p>
              {formConfirm ? <button onClick={this.handleConfirm}>Confirm</button> : ""}
            </div>
          )
        } else {
          return (
            <>
              <p id="pageConfirm">You have successfully submitted the application!</p>
            </>
          )
        }
    }
}

export default Form
