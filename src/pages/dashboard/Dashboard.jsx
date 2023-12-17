import { useEffect, useState } from 'react'
import { useUserData } from '../../hooks/useUserData'
import styles from './dashboard.module.scss'
import { dashboard } from '../../data/dashboard'

const Dashboard = () => {
    const [user, setUser] = useState(null)
    const { getUserDetails } = useUserData()

    useEffect(() => {
        setUser(getUserDetails())
    }, [])

    return (
        <>
            <div className={styles['dashboard-container']}>
                <div className={styles['dashboard']}>
                    <h1>Dashboard</h1>
                    <table className={styles['table']}>
                        <tbody>
                            {
                                dashboard?.map((data, index) => {
                                    return <tr key={index}>
                                        <td>{data.label}</td>
                                        <td>{user?.[data.field]}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Dashboard