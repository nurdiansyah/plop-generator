export const MODULE_NAME = "{{ moduleName }}";

export type ModuleApiRoute = {
  bookRoute: string;
  classRoomRoute: string;
  courseRoute: string;
  studentRoute: string;
};

export const getModuleApiRoute = (): ModuleApiRoute => {
  const base = MODULE_NAME;
  return {
    bookRoute: `${base}/book`,
    classRoomRoute: `${base}/class-room`,
    courseRoute: `${base}/course`,
    studentRoute: `${base}/student`
  };
};
