import EducationInformation from "./EducationInformation"
import GeneralInformation from "./GeneralInformation"
import PracticalInformation from "./PracticalInformation"
export default function EditCV(){
    return(
        <div id="editPage">
            <GeneralInformation/>
            <label> _________________________________________________________________________________________________________________________________________</label>
            <EducationInformation/>
            <label> _________________________________________________________________________________________________________________________________________</label>
            <PracticalInformation/>
        </div>
    )
}