interface CodeSchoolUser {
    username:string;
    member_since:string;
    total_score:number;
    avatar:string;
}

interface CodeSchoolCourse {
    title:string;
    url:string;
    badge:string;
}

interface CodeSchoolBadge {
    name:string;
    badge:string;
    course_url:string;
}

export interface CodeSchool {
    user:CodeSchoolUser;
    courses: {
        completed:Array<CodeSchoolCourse>;
        in_progress:Array<CodeSchoolCourse>;
    };
    badges:Array<CodeSchoolBadge>;
}
