// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// 👇 Setting PropertyId
const propertyId = "gurucharan-1678552370586"

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: "starting-account-ujnsaglkzpxz@gurucharan-1678552370586.iam.gserviceaccount.com",
    private_key: "bc24a553b206d55185cacbc3e2878f9f05b62654", // replacing is necessary
    // private_key: pk.replace(/\n/gm, "\n"), // replacing is necessary
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: `30daysAgo`, //👈  e.g. "7daysAgo" or "30daysAgo"
        endDate: "today",
      },
    ],
    dimensions: [
      {
        name: "year", // data will be year wise
      },
    ],
    metrics: [
      {
        name: "activeUsers", // it returs the active users
      },
    ],
  })

  let totalVisitors = 0
  response.rows?.forEach((row: any) => {
    totalVisitors += parseInt(row.metricValues[0].value)
  })

  res.status(200).json(totalVisitors)
}
