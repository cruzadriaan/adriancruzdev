import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Certification from '../sections/Certification';
import { Element } from 'react-scroll';

const ResumeGrid = ({containerClass, mediumTextGradient}) => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        <Element name="experience"><Experience containerClass={containerClass} mediumTextGradient={mediumTextGradient} /></Element>
        <Element name="certification"><Certification containerClass={containerClass} mediumTextGradient={mediumTextGradient} /></Element>
        <Element name="education"><Education id="education" containerClass={containerClass} /></Element>
    </div>
  )
}

export default ResumeGrid