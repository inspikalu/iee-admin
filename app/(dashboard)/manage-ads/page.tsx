"use client"

import axios from "axios"
import { baseBackendUrl } from "@/app/const"
import { useEffect, useState } from "react"
import { useLoginContext } from "@/contexts/LoginContext"


function ManageAdsPage() {
    const [reportedAds, setReportedAds] = useState([])
    const { userData } = useLoginContext()

    const getAds = async function () {
        try {
            const response = await axios.get(`${baseBackendUrl}/admin/reported-ads`, {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            })
            console.log(response)
            setReportedAds(response.data)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAds()
    }, [])
    return (
        <div>Manage Ads</div>
    )
}

export default ManageAdsPage
