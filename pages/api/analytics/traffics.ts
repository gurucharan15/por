// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { BetaAnalyticsDataClient } from "@google-analytics/data"

// 👇 Setting PropertyId
const propertyId = "357858228"

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: "gurucharan@gurucharan-380316.iam.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCZFbZ03ICA8H7N\nscMEWX4lW3ZQ9TJQpHiULpCb86NSy6eFL6jsjL2X+qaOyq3TvYBBWemhuJtPBaCY\n+Sc++EIlXjuURh0fIs0nXqrgLc328XwyZuBqgD0gNKTG3Pe6F4QjiC1BSSi0Z48R\n/XG7Ddd1PcOsEXlpKWj1if3bpxDNqLfgsMd2aMFvr+Q4c0J71IkSosusNfJV1Wu5\nwZC2tlkvNmvawoZWY5PM+2jyItoizAn47jTuV9J3YB+zjcdy4mcjKIiRtCNEOlMe\n0NhhWR+FrCUXuhikJsaTugj/rOt2DKN2gocVZvYiNVbxr9sM4xHxByUtjLQeOrd4\n7brOQ5KrAgMBAAECggEADcZ6aKxUPptljbTqoOrnWGKRPwURcK2cJsQZ7IP8Cmib\nu8xncwHR0xSRsFUPV00SIXn/IA0F92fA5S27w7ArTkQwhaMu3le6Bko/2MnGYuul\nYBO0gLY8Hzhy1heZjdFX6VVJB+WWwsUe3AuRFGKmehJYwpRqocqW0KGI38nPepy0\nXVmtEK/Cd+FK+5EQ2qOkCKQhyPMZ0dPYdROnt7zDJHel1v8SZIVCXOfwKjU/IYJa\nd/L5nNJ7TPk/EqnamOtpUwFbzvpCE2gLc9jO6i5iO76j6xfjQtU3/rmuIaMDP4B8\nMPDSsFg3sIi/kuzicON77MqD9Kn2nggVqLUzpoODgQKBgQDScsN8Ltmmui6VDRvT\nsO2AfOiCtwH9ZjLgk85zbNX1Tov5Rqoi3xzsY3JnEUKpZq1bME0tiV2OniCrPPvX\nHgnPCGs5119CS37I/SO2GnuhS/lsaqat76nGKC84HzJ5npdHa2IlsZfUMNLYqcdq\n3HQWkZYlmsg9zWjoQyEHnTeXWwKBgQC6OFufcv2THQ+92uMilBG/h2yfF9WNHkVu\nsIH73Fkd9sU0EeKdxJ4ocmgV3o6jY8ofQklU9iJ8XMigdI/buMY099ZrtfVysn2o\nhdqfdKYzS4t+bqHt22uSrvTt526ZUmfUQTMXbWgbI25pZpBnBnIDozpT8GQCNcnV\n48a5DLwi8QKBgCG+72Pha1tV7ZRPFtA6RctdvDcBu5rzoWLrsKZHpIOCheWCFFQl\nLNEnHTgzx1m8sj22IBoWNd9hseFjlQqosW/2bKNIyuipjHoURX60/nAd67Ab5gBs\nNvAkj3XTYtenu6BjMsjSkoMfFSBTETwsf50C2W3MRSHL52+fHBPJfRmTAoGBAKsv\nn9qGROD2OEBZda+V2nLtNUdTC7c8eqt0iylSuIG5FjP1tRM/afzYnyJrg0hkNaxi\nrTLzSWR1juEiBhUAWQTcSDqf/NDBkI5Y7k7jVt2Uttk1LpqPuOYQ+4uv0pYTkOso\nPKVup+M6wQcXh+uNm0YIyVfchrMZaz+6sjXupQyhAoGBAKhe1tTD17QO9UAvIXyA\naJLMZEi93sBxSurnnGVsHVBK/6ScGSFwrC/gdZlWn4a5cxIb1iy0XvKDZFP4vUV6\naERfbtH08fktuV0HJn0/3TGr0T826YtkqpJkhuhihTR+syLQDaICcG6Au9iMo5kS\nFNKo6FL72uYrFsE6a3QMHy2j\n-----END PRIVATE KEY-----\n", 
    // replacing is necessary
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
        startDate: `2023-02-01`, //👈  e.g. "7daysAgo" or "30daysAgo"
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
