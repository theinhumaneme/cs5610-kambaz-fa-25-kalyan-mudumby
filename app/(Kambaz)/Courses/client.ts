import axios from "axios";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Assignment } from "../types/assignment";
import { Course } from "../types/course";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const ASSIGNMENT_API = `${HTTP_SERVER}/api/assignment`;

export const enrollToCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/enroll`,
  );
  return data;
};
export const unenrollFromCourse = async (courseId: string) => {
  const { data } = await axiosWithCredentials.delete(
    `${COURSES_API}/${courseId}/unenroll`,
  );
  return data;
};
export const fetchAllEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(ENROLLMENTS_API);
  return data;
};

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/current/courses`,
  );
  console.log(data);
  return data;
};

export const createCourse = async (course: Course) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course,
  );
  return data;
};
export const enrolledUsers = async (id: string) => {
  const { data } = await axiosWithCredentials.get(
    `${USERS_API}/${id}/enrollments`,
  );
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: Course) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module,
  );
  return response.data;
};
const MODULES_API = `${HTTP_SERVER}/api/modules`;
export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(
    `${COURSES_API}/${courseId}/modules/${moduleId}`,
  );
  return response.data;
};

export const updateModule = async (courseId: string, module: any) => {
  const { data } = await axios.put(
    `${COURSES_API}/${courseId}/modules/${module._id}`,
    module,
  );
  return data;
};

export const fetchAllAssignments = async () => {
  const { data } = await axios.get(ASSIGNMENT_API);
  return data;
};

export const deleteAssignment = async (id: string) => {
  const { data } = await axios.delete(`${ASSIGNMENT_API}/${id}`);
  return data;
};
export const updateAssignment = async (assignment: Assignment) => {
  const { data } = await axios.put(
    `${ASSIGNMENT_API}/${assignment._id}`,
    assignment,
  );
  return data;
};
export const createAssignment = async (
  assignment: Assignment,
  courseId: string,
) => {
  const { data } = await axiosWithCredentials.post(
    `${ASSIGNMENT_API}/${courseId}`,
    assignment,
  );
  return data;
};
