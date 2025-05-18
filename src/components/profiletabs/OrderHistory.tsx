"use client"

import { useState, useMemo } from "react"
import { FaCircle, FaEllipsisH, FaEye, FaChevronDown } from "react-icons/fa"

// Order data constant
const ORDERS_DATA = [
  {
    id: "#12345",
    date: "Jan 15, 2025",
    status: "delivered",
    total: "$99.99",
  },
  {
    id: "#12346",
    date: "Feb 2, 2025",
    status: "processing",
    total: "$49.99",
  },
  {
    id: "#12347",
    date: "Mar 5, 2025",
    status: "canceled",
    total: "$79.99",
  },
  {
    id: "#12348",
    date: "Mar 10, 2025",
    status: "delivered",
    total: "$129.99",
  },
  {
    id: "#12349",
    date: "Mar 15, 2025",
    status: "processing",
    total: "$59.99",
  },
  {
    id: "#12350",
    date: "Mar 20, 2025",
    status: "canceled",
    total: "$89.99",
  },
]

export default function OrderHistory() {
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("newest")

  // Filter and sort orders based on selected filters
  const filteredOrders = useMemo(() => {
    // First filter by status
    let result = [...ORDERS_DATA]

    if (statusFilter !== "all") {
      result = result.filter((order) => order.status === statusFilter)
    }

    // Then sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      return sortOrder === "newest" ? dateB.getTime() - dateA.getTime() : dateA.getTime() - dateB.getTime()
    })

    return result
  }, [statusFilter, sortOrder])


  return (
    <div className="w-full">

        <div className="flex gap-6 mb-6">
          {/* Native select for status filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-[#252525]   text-gray-200 rounded-md px-4 py-3 pr-8 focus:outline-none  w-full"
            >
              <option value="all">All Status</option>
              <option value="delivered">Delivered</option>
              <option value="processing">Processing</option>
              <option value="canceled">Canceled</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FaChevronDown className="h-3 w-3 text-gray-400" />
            </div>
          </div>

          {/* Native select for sort order */}
          <div className="relative">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none bg-[#252525]  text-gray-200 rounded-md px-4 py-3 pr-8 focus:outline-none w-full"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FaChevronDown className="h-3 w-3 text-gray-400" />
            </div>
          </div>

        </div>

        <div className="bg-[#252525] rounded-lg overflow-hidden px-6 py-3">
          <div className="grid grid-cols-[17fr_22fr_23fr_15fr_18fr] p-4 border-b border-gray-700 text-gray-400 font-medium">
            <div>Order #</div>
            <div>Date</div>
            <div>Status</div>
            <div>Total</div>
            <div className="text-right">Actions</div>
          </div>

          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div key={order.id} className="grid grid-cols-[17fr_22fr_23fr_15fr_18fr] p-4 border-b border-gray-700 text-gray-200 items-center">
                <div>{order.id}</div>
                <div className="text-sm">{order.date}</div>
                <div className={`flex items-center gap-2 ${order.status?.toLowerCase() === "delivered" ? "text-[#10B981]  bg-[#10B98133]" : order.status?.toLowerCase() === "processing" ? "text-[#F59E0B]  bg-[#F59E0B33]" : "text-[#EF4444]  bg-[#EF444433]"} py-[6px] px-3 w-fit text-sm rounded-full`}>
                  <FaCircle className={`h-2 w-2`} />
                  <span>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </div>
                <div className="text-sm">{order.total}</div>
                <div className="text-right">
                  {order.status === "delivered" ? (
                    <button className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm cursor-pointer">
                      
                      View Details
                    </button>
                  ) : (
                    <button className="inline-flex items-center justify-center text-[#A78BFA] cursor-pointer p-2 rounded-md ml-auto">
                      <FaEye className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-400">No orders found matching the selected filters.</div>
          )}
        </div>

    </div>
  )
}
