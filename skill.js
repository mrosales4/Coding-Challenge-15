//U22978120

import React from 'react';
import styled from 'styled-components';

const skills = [
  { name: 'JavaScript', proficiency: 'Expert' },
  { name: 'React', proficiency: 'Proficient' },
  { name: 'Excel', proficiency: 'Expert'},
  { name: 'Powerpoint', proficiency: 'Expert'},
  { name: 'Spanish', proficiency: 'proficient'},
];

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const SkillName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;
