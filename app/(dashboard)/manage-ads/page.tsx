"use client"

import axios, { AxiosError } from "axios"
import { baseBackendUrl } from "@/app/const"
import { useEffect, useState } from "react"
import { useLoginContext } from "@/contexts/LoginContext"

// Define the type for reported ads
interface Ad {
    id: number;
    title: string;
    description: string;
    // Add any other fields your ads have
}

function ManageAdsPage() {
    // Explicitly type the state for reported ads
    const [reportedAds, setReportedAds] = useState<Ad[]>([])
    
    // Destructure userData from useLoginContext, assuming it has token property
    const { userData } = useLoginContext()

    // Define the type for the API response if needed
    const getAds = async () => {
        try {
            const response = await axios.get<Ad[]>(`${baseBackendUrl}/admin/reported-ads`, {
                headers: {
                    Authorization: `Bearer ${userData?.token}`,  // Optional chaining in case userData is undefined
                },
            })
            console.log(response)
            setReportedAds(response.data)
        } catch (error: unknown) {  // Use `unknown` here
            // Cast the error to AxiosError safely
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.log(axiosError.response.data)
            } else {
                console.log(axiosError.message)
            }
        }
    }

    // Fetch ads on component mount
    useEffect(() => {
        if (userData?.token) {
            getAds()
        }
    }, [userData?.token])

    return (
        <div>
            <h1>Manage Ads</h1>
            <ul>
                {reportedAds.map(ad => (
                    <li key={ad.id}>
                        <strong>{ad.title}</strong>: {ad.description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ManageAdsPage
