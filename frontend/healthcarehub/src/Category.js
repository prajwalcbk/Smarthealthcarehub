import React, { useState } from 'react';
import './Category.css';
import dentistImage from './assets/Dentist.jpg';
import nutritionImage from './assets/Nutrition.jpg';
import physiotherapistimage from './assets/Physiotherapist.jpg';
import surgeonImage from './assets/Surgeon.jpg';
import person from './assets/person.jpg'
import person2 from './assets/person2.jpg'
import person3 from './assets/person3.jpg'

const Category = () =>{

    const category = {
        doctor: '78',
        patient:'899'
      };

      const sections = [
        { image: dentistImage, title: 'Dentist', description:'Teething troubles ? Schedule a dental checkup.' },
        { image: nutritionImage, title: 'Nutrition', description: 'Get guidance on eating right, weight management, etc.'},
        { image: physiotherapistimage, title: 'Physiotherapist', description: 'Pulled a muscle? Get it treated by a trained physiotherapist.'},
        { image: surgeonImage, title: 'Surgeon', description: 'Pulled a muscle? Get it treated by a trained physiotherapist.'},

    ];

    const feedbacks =[
        {image: person},
        {image: person2},
        {image: person3}
    ];

    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    const goToNextFeedback = () => {
        setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    };

    const goToPreviousFeedback = () => {
        setCurrentFeedbackIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
    };

    return(
        <div className='category'>
            <div className='cat-container'>
                <div className='count'>
                    <p>{category.doctor}</p>
                    <p>Doctors</p>
                </div>
                <div className='count'>
                    <p>{category.patient}</p>
                    <p>Patients</p>
                </div>
            </div>
            <br/>
            <p>Book appointments and received experienced doctor insight from various medical fields.</p>
            <div className='cat-section'>
                {sections.map((section, index) => (
                    <div key={index} className='section'>
                        <div className='section-content'>
                            <div className='section-image' style={{ backgroundImage: `url(${section.image})` }}></div>
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br/>
            <div className='footer-container'>
                <p>What our users have to say</p>
                <div className='user-feedback'>
                <button onClick={goToPreviousFeedback}>←</button>
                    <div className='feedback-content'>
                        <div className="user-photo" style={{ backgroundImage: `url(${feedbacks[currentFeedbackIndex].image})` }}></div>
                    </div>
                    <button onClick={goToNextFeedback}>→</button>
                </div>
                <div className='arrow-buttons'>
                    
                   
                </div>
            </div>
        </div>
    );

}

export default Category;