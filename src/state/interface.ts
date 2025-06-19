export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number; 
}

export interface SalesSummary{
    salesSummrayId: string;
    totalValue: number;
    changePercentage?: number;
    date: string;
}

export interface PurchaseSummary{
    purchaseSummaryId: string;
    totalPurchaseId: number;
    changePercentage?: number;
    date: string;
}

export interface ExpenseSummary{
    expenseSummaryId: string;
    totalExpenses: number;
    date: string;
}

export interface ExpenseByCategorySummary{
    expenseByCategoryId: string;
    category: string;
    amount: number;
    date: string;
}