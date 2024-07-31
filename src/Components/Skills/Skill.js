import React from "react";
import "./Skill.css"

const SkillPage = ({ skill }) => {
    return (
        <div className="SkillBlock">
            {
                skill?.map((item, index) => {
                    return (
                        <div className="SkillCard">
                            <div className="CardTitle">{item?.SkillTitle}</div>
                            <div className="SkillTechnology">
                                {
                                    item?.Skill?.map((it, ind)=>{
                                        return(<div className="SkillName">{it}</div>)
                                    })
                                }
                                
                            </div>
                        </div>
                    );
                })
            }

            

        </div>



    )
}

export default SkillPage