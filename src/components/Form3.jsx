import React from 'react';

const Form3 = ({ data, onBack, onNext, handleChange }) => {
    
    
    return (
        <div className="main">


            <div className="form-container">
                <h2>Category Master</h2>
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
                        <label>Number of Questions:</label>
                        <input
                            type="number"
                            name="numOfCategoryQuestions"
                            value={data.numOfCategoryQuestions}
                            onChange={handleChange}
                            placeholder="Number of Questions"
                        />

                    </div>
                </div>

                <div className="btn-div">
                    <button onClick={onBack}>Back</button>
                    <button>Skip</button>
                    <button onClick={onNext}>Save & Continue</button>

                </div>
            </div>
        </div>

    );
};

export default Form3;

