import React from "react";
export function QualificationItem(props) {
  return (
    <div className="body-qualifications-item">
      <div className="body-qualifications-main-title">{props.title}</div>
      <div className="body-qualifications-langs-grid">
        {props.skills.map((proficiency, index) => (
          <>
            <div className="body-qualifications-proficiency-langs">
              {proficiency.langs.map((language, num) => (
                <div className="body-qualifications-proficiency-item">
                  <img
                    src={language.imgSrc}
                    alt={`${language.title} icon`}
                    className="body-qualifications-lang-img"
                  />
                  <div className="body-qualifications-lang-title">
                    {language.title}
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
