import dashboard from '../assets/icons/dashboard/dashboard.svg'
import dashboard_active from '../assets/icons/dashboard/dashboard_active.svg'
import student from '../assets/icons/student/student.svg'
import student_active from '../assets/icons/student/student_active.svg'
import teacher from '../assets/icons/teacher/teacher.svg'
import teacher_active from '../assets/icons/teacher/teacher_active.svg'
import group from '../assets/icons/group/group.svg'
import group_active from '../assets/icons/group/group_active.svg'
import sciense from '../assets/icons/sciensie/sciensie.svg'
import sciense_active from '../assets/icons/sciensie/sciensie_active.svg'
import user from '../assets/icons/user/user.svg'
import user_active from '../assets/icons/user/user_active.svg'
import question_answer from '../assets/icons/question_answer/question_answer.svg'
import question_answer_active from '../assets/icons/question_answer/question_answer_active.svg'
import statistic from '../assets/icons/statistic/statistic.svg'
import statistic_active from '../assets/icons/statistic/statistic_active.svg'
export const navLinks = [
  {
    id: 1,
    title: 'Asosiy',
    link: '/',
    icon: [dashboard, dashboard_active]
  },
  {
    id: 2,
    title: `O'quvchilar`,
    link: '/students',
    icon: [student, student_active]
  },
  {
    id: 3,
    title: `O'qituvchilar`,
    link: '/teachers',
    icon: [teacher, teacher_active]
  },
  {
    id: 4,
    title: 'Guruhlar',
    link: '/groups',
    icon: [group, group_active]
  },
  {
    id: 5,
    title: 'Fanlar',
    link: '/sciences',
    icon: [sciense, sciense_active]
  },
  {
    id: 6,
    title: 'Foydalanuvchilar',
    link: '/users',
    icon: [user, user_active]
  },
  {
    id: 7,
    title: 'Savol javob',
    link: '/question_answer',
    icon: [question_answer, question_answer_active]
  },
  {
    id: 8,
    title: 'Statistika',
    link: '/statistics',
    icon: [statistic, statistic_active]
  }
]
