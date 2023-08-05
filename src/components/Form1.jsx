import React from 'react';

const Form1 = ({ data, onNext, handleChange }) => {
    return (
        <div className="main">
            <div className="form-container">
                <h2>Test Master</h2>
                <div className="input-flex">
                    <div className="input-flex-item">
                        <label>Test Name:</label>
                        <input
                            type="text"
                            name="testName"
                            value={data.testName}
                            onChange={handleChange}
                            placeholder="Test Name"
                            required
                        />

                    </div>
                    <div className="input-flex-item">

                        <label>Test Description:</label>
                        <textarea
                            name="testDescription"
                            value={data.testDescription}
                            onChange={handleChange}
                            placeholder="Test Description"
                            
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Duration of Test (minutes):</label>
                        <input
                            type="number"
                            name="duration"
                            value={data.duration}
                            onChange={handleChange}
                            placeholder="Duration of Test (minutes)"
                            required
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Number of Questions:</label>
                        <input
                            type="number"
                            name="numOfQuestions"
                            value={data.numOfQuestions}
                            onChange={handleChange}
                            placeholder="Number of Questions"
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Image for Test:</label>
                        <input
                            type="file"
                            name="testImage"
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className="btn-div">
                    <button onClick={onNext}>Save & Continue</button>

                </div>
            </div>
        </div>

    );
};

export default Form1;


