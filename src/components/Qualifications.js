import React from "react";
import { QualificationItem } from "./QualificationItem";
export function Qualifications({ data }) {
  return (
    <div className="body-qualifications">
      <div className="body-img-wrapper">
        <img
          src={data.qualificationsImg}
          alt="qualifications Img"
          className="body-img"
        />
      </div>
      <div className="body-header">
        <div className="body-title">QUALIFICATIONS</div>
        <div className="description-text">
          Over the last few years, I've engaged in a wide range of technologies,
          and today, these are the range of skills I have{" "}
          <strong>learned and implemented</strong>. I am keen to{" "}
          <strong>continue deepening my skills</strong> and{" "}
          <strong>learning new technologies</strong>!
        </div>
      </div>
      <div className="body-qualifications-row">
        <QualificationItem title="Frontend" skills={data.frontendSkills} />
        <QualificationItem title="Backend" skills={data.backendSkills} />
        <QualificationItem title="DevOps" skills={data.devopSkills} />
        <QualificationItem
          title="Design and Prototyping"
          skills={data.designSkills}
        />
        <QualificationItem
          title="Programming Languages"
          skills={data.programmingSkills}
        />
        <QualificationItem title="Production" skills={data.productionSkills} />
      </div>
    </div>
  );
}
