"use client";
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {  Calendar, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Payment {
  id: number;
  date: string;
  amount: number;

}

interface PaymentHistoryProps {
  payments: Payment[];
  theme: "light" | "dark";
}

export default function PaymentHistory({ payments, theme }: PaymentHistoryProps) {
  const { t } = useTranslation()
  return (
          <Card
      className={`border ${
        theme === "dark"
          ? "bg-[#0E1827] border-[#0F2535] shadow-[0_4px_12px_rgba(1,242,160,0.15)]"
          : "bg-white border-gray-200 shadow-md"
      }`}
    >
      <CardHeader>
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <Clock className="w-7 h-7 text-[#38bdf8]" /> {t('borrowerDashboard.paymentHistory.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className='px-0'>
        
          <Table className="text-white w-full">
            <TableHeader className="">
              <TableRow className=" border-t border-gray-700">
                <TableHead className='pl-6 py-4 text-[#38bdf8]'>
                    <h1>{t('borrowerDashboard.paymentHistory.date')}</h1>
                </TableHead>
                <TableHead className="text-right pr-6  text-[#38bdf8]">
                    <h1>{t('borrowerDashboard.paymentHistory.amount')}</h1>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <TableRow key={payment.id} className="border-b border-gray-700 py-6">
                    <TableCell className='pl-6 py-4'>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {payment.date}
                      </div>
                    </TableCell>
                    <TableCell className="text-right pr-6 text-green-400">
                         ${payment.amount.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={2} className="text-center text-gray-400 py-4">
                  {t('borrowerDashboard.paymentHistory.noPayment')}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
      

      </CardContent>
    </Card>
  )
}
