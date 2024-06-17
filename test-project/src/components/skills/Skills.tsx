import React, {useState, useEffect} from "react";
import { SkillProps } from "./Skills.types";

const Skills = (props: SkillProps) => {
  const { skills } = props;
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true)
    }, 1001)
  }, [])
  return (
    <div>
      <p>Skills</p>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLogin ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>Login</button>
      )}
    </div>
  );
};

export default Skills;
