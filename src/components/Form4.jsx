import React from 'react';

const Form4 = ({ data, onBack, onSaveContinue, handleChange }) => {
    return (
        <div className="main">

            <div className="form-container">
                <h2>MCQ Questions with Category or without Category</h2>
                <div className="input-flex">
                    <div className="input-flex-item">

                        <label>Category Name:</label>
                        <input
                            type="text"
                            name="categoryName"
                            value={data.categoryName}
                            onChange={handleChange}
                            placeholder="Category Name"
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Question Image:</label>
                        <input
                            type="file"
                            name="questionImage"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Question Text:</label>
                        <textarea
                            name="questionText"
                            value={data.questionText}
                            onChange={handleChange}
                            placeholder="Question Text"
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Question Time:</label>
                        <input
                            type="number"
                            name="questionName"
                            value={data.questionTime}
                            onChange={handleChange}
                            placeholder="Question Time"
                        />
                    </div>
                    <div className="input-flex-item">

                        <label>Question Weightage:</label>
                        <input
                            type="number"
                            name="questionWeightage"
                            value={data.questionWeightage}
                            onChange={handleChange}
                            placeholder="Question Weightage"
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

                    <div className="mcq-flex-item">

                        <label>MCQ1:</label>
                        <input
                            type="text"
                            name="MCQ1"
                            value={data.MCQ1}
                            onChange={handleChange}
                            placeholder="MCQ1"
                        />
                    </div>
                    <div className="mcq-flex-item">
                        <label>MCQ1 Weightage:</label>
                        <input
                            type="number"
                            name="MCQ1_Weightage"
                            value={data.MCQ1Weightage}
                            onChange={handleChange}
                            placeholder="MCQ1 Weightage"
                        />
                    </div>
                    <div className="mcq-flex-item">

                        <label>MCQ2:</label>
                        <input
                            type="text"
                            name="MCQ2"
                            value={data.MCQ2}
                            onChange={handleChange}
                            placeholder="MCQ2"
                        />
                    </div>
                    <div className="mcq-flex-item">
                        <label>MCQ2 Weightage:</label>
                        <input
                            type="number"
                            name="MCQ2_Weightage"
                            value={data.MCQ1Weightage}
                            onChange={handleChange}
                            placeholder="MCQ2 Weightage"
                        />
                    </div>
                    <div className="mcq-flex-item">

                        <label>MCQ3:</label>
                        <input
                            type="text"
                            name="MCQ3"
                            value={data.MCQ3}
                            onChange={handleChange}
                            placeholder="MCQ3"
                        />
                    </div>
                    <div className="mcq-flex-item">
                        <label>MCQ3 Weightage:</label>
                        <input
                            type="number"
                            name="MCQ3_Weightage"
                            value={data.MCQ3Weightage}
                            onChange={handleChange}
                            placeholder="MCQ3 Weightage"
                        />
                    </div>
                    <div className="mcq-flex-item">

                        <label>MCQ4:</label>
                        <input
                            type="text"
                            name="MCQ4"
                            value={data.MCQ4}
                            onChange={handleChange}
                            placeholder="MCQ4"
                        />
                    </div>
                    <div className="mcq-flex-item">
                        <label>MCQ4 Weightage:</label>
                        <input
                            type="number"
                            name="MCQ4_Weightage"
                            value={data.MCQ4Weightage}
                            onChange={handleChange}
                            placeholder="MCQ4 Weightage"
                        />
                    </div>


                </div>
                <div className="btn-div">

                    <button onClick={onBack}>Back</button>
                    <button>Add more question</button>
                    <button onClick={onSaveContinue}>Save & Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Form4;

