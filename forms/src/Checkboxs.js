import React from 'react';

class Checkbox extends React.Component {


  handleFollowUpQuestion(id) {

    if (this.props.family[id]) {
      let range;

      if (id === 'siblings') {
        range = this.CreateRange(0,11)
      } else if (id === 'parents') {
        range = this.CreateRange(0,3)
      } else if (id === 'grandparents') {
        range = this.CreateRange(0,5)
      }
      return(

        <React.Fragment>
          <select name={id + 'Amount'} value={this.props.family[id + 'Amount']}>
            <option disabled> family </option>
              {range}
            <option> more </option>
          </select>
        </React.Fragment>
      )
    }

  }

  CreateRange(min, max){
    let number = [];
    for (let i = min; i < max; i++) {
      number.push(i);
    }
    return number.map(num => {
      return <option value={num}> {num} </option>
    })
  }



    render() {
      const { handleCheckboxChange, handleChange, family } = this.props;
      const { siblings, parents, grandparents } = family;



      return (
        <div className="checkboxs">
          <p>
            Does your family have a history of (check all that apply):
          </p>
          <label htmlFor="Cancer">Cancer</label>
            <input
              id="cancer"
              name="checkbox_disease"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Heart Disease">Heart Disease</label>
            <input
              id="heart_disease"
              name="checkbox_disease"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Diabetes">Diabetes</label>
            <input
              id="diabetes"
              name="checkbox_disease"
              type="checkbox"
              onChange={handleCheckboxChange}
            />

            <p>
              Do you have any living (check all that apply):
            </p>

            <div>

              <label htmlFor="checkbox">Siblings</label>
              <input
                id="siblings"
                name="family"
                type="checkbox"
                checked={siblings}
                onChange={handleCheckboxChange}

                />
                {this.handleFollowUpQuestion('siblings')}
            </div>


            <div>
              <label htmlFor="checkbox">Parents</label>
              <input
                id="parents"
                name="family"
                type="checkbox"
                checked={parents}
                onChange={handleCheckboxChange}
              />
              {this.handleFollowUpQuestion('parents')}
            </div>

            <div>
              <label htmlFor="checkbox">Grandparents</label>
              <input
                id="grandparents"
                name="family"
                type="checkbox"
                checked={grandparents}
                onChange={handleCheckboxChange}
              />
              {this.handleFollowUpQuestion('grandparents')}
            </div>

            <p>
              Check all educational credentials that you have received:
            </p>
            <label htmlFor="High School diploma or GED equivalent">High School diploma or GED equivalent</label>
            <input
              id="high school or GED"
              name="education"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Associate Degree">Associate Degree</label>
            <input
              id="associate"
              name="education"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Bachelor's Degree">Bachelor Degree</label>
            <input
              id="bachelor"
              name="education"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Master's Degree">Master Degree</label>
            <input
              id="master"
              name="education"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="PhD">PhD</label>
            <input
              id="PhD"
              name="education"
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Other">Other</label>
            <input
              id="other"
              name="education_other"
              type="text"
              onChange={handleChange}
            />
        </div>
      );
    }
  }

export default Checkbox
