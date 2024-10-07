"use client"

import axios, { AxiosError } from "axios"
import { baseBackendUrl } from "@/app/const"
import { useEffect, useState } from "react"
import { useLoginContext } from "@/contexts/LoginContext"

// Define the type for reported ads
interface Ad {
    id: number;
    description: string;
    createdAt: string;
    updatedAt: string;
    adId: string;
    ad: {
        title: string;
        photos: string[], // Assuming photos is an array of image URLs
        author: {
            id: string,
            name: string,
        }
    },
    reportedBy: {
        id: string;
        name: string;
    }
    // Ad any other fields your ads have
}

function ManageAdsPage() {
    const [reportedAds, setReportedAds] = useState<Ad[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const { userData } = useLoginContext()

    const getAds = async () => {
        setLoading(true)
        setError(null) // Reset any previous errors
        try {
            const response = await axios.get<Ad[]>(`${baseBackendUrl}/admin/reported-ads`, {
                headers: {
                    Authorization: `Bearer ${userData?.token}`,
                },
            })
            setReportedAds(response.data)
        } catch (error: unknown) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                setError(axiosError.response.data as string)
            } else {
                setError(axiosError.message)
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (userData?.token) {
            getAds()
        }
    }, [userData?.token])

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-4">Manage Ads</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reportedAds.length > 0 ? (
                    reportedAds.map(ad => (
                        <div key={ad.id} className="border rounded-lg shadow-lg p-4 bg-white">
                            {ad.ad.photos.length > 0 ? (
                                <img
                                    src={ad.ad.photos[0]}
                                    alt={ad.ad.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                            ) : (
                                <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-md mb-4">
                                    <span className="text-gray-500">No Image Available</span>
                                </div>
                            )}
                            <h2 className="text-xl font-semibold mb-2">{ad.ad.title}</h2>
                            <p className="text-gray-700 mb-2">{ad.description}</p>
                            <p className="text-sm text-gray-600 mb-4">
                                <em>Reported by: {ad.reportedBy.name}</em>
                            </p>
                            <p className="text-sm text-gray-600">
                                <em>Author: {ad.ad.author.name}</em>
                            </p>
                        </div>
                    ))
                ) : (
                    !loading && <p>No reported ads found.</p>
                )}
            </div>
        </div>
    )
}

export default ManageAdsPage
