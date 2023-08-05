import React from 'react';

const Form2 = ({ data, onBack, onNext, handleChange }) => {
    return (
        <div className="main">


            <div className="form-container">
                <h2>Instruction for Test</h2>
                <div className="input-flex" style={{ justifyContent: "space-between" }} >
                    <div className="input-flex-item">
                        <label>Instruction:</label>
                        <textarea
                            name="instruction"
                            value={data.instruction}
                            onChange={handleChange}
                            placeholder="Instruction"
                        />
                    </div>
                    <div className="input-flex-item">
                        <label>Select Test Name:</label>
                        <select
                            name="selectedTest"
                            value={data.selectedTest}
                            onChange={handleChange}
                        >
                            <option value="">Select Test Name</option>
                            <option  value={data.testName}>
                                {data.testName}
                            </option>
                           
                            {/* Map over test names and create options */}
                        </select>

                    </div>
                </div>

                <div className="btn-div">
                    <button onClick={onBack}>Back</button>
                    <button>Add more instructions</button>
                    <button onClick={onNext}>Save & Continue</button>

                </div>
            </div>
        </div>
    );
};

export default Form2;

