import React, { useState, useEffect } from 'react'
import StudentList from '../components/StudentList'
import StudentForm from '../components/StudentForm'

export default function Home() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Dian', major: 'Informatika' },
    { id: 2, name: 'Gilbert', major: 'Teknologi Informasi' }
  ])

  const [newStudent, setNewStudent] = useState({ name: '', major: '' })

  useEffect(() => {
    console.log('Student list diperbarui:', students)
  }, [students])

  const addStudent = () => {
    if (newStudent.name && newStudent.major) {
      setStudents([...students, { id: Date.now(), ...newStudent }])
      setNewStudent({ name: '', major: '' })
    }
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id))
  }

  return (
    <div>
      <StudentForm 
        newStudent={newStudent} 
        setNewStudent={setNewStudent} 
        addStudent={addStudent} 
      />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  )
}
