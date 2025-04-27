// BillingScreen.tsx
import React, { useState } from "react";
import { Search, X, Plus, Minus, User, UserPlus } from "lucide-react";

// Types
type StoreType =
  | "Grocery"
  | "Clothing"
  | "Electronics"
  | "Cosmetics"
  | "Stationery"
  | "Supermarket"
  | "Medical"
  | "Restaurant";

interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
  total: number;
}

interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  loyaltyPoints: number;
}

type PaymentMethod = "Cash" | "Credit Card" | "Mobile Payment";

// Main Component
const BillingScreen: React.FC = () => {
  // State
  const [storeType, setStoreType] = useState<StoreType>("Grocery");
  const [saleNumber, setSaleNumber] = useState("2089");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Product[]>([
    {
      id: "1",
      name: "Organic Apples",
      sku: "PRD-001",
      price: 2.99,
      quantity: 2,
      total: 5.98,
    },
    {
      id: "2",
      name: "Whole Milk",
      sku: "PRD-023",
      price: 3.49,
      quantity: 1,
      total: 3.49,
    },
    {
      id: "3",
      name: "Multigrain Bread",
      sku: "PRD-118",
      price: 4.25,
      quantity: 2,
      total: 8.5,
    },
    {
      id: "4",
      name: "Orange Juice",
      sku: "PRD-067",
      price: 3.75,
      quantity: 1,
      total: 3.75,
    },
    {
      id: "5",
      name: "Chicken Breast",
      sku: "PRD-135",
      price: 6.75,
      quantity: 1,
      total: 6.75,
    },
  ]);
  const [customer, setCustomer] = useState<Customer>({
    id: "1",
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    email: "sarah.j@example.com",
    loyaltyPoints: 230,
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod>("Cash");
  const [cashierName, setCashierName] = useState("John Doe");

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
  const taxRate = 0.07;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  // Format currency
  const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
  };

  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCart(
      cart.map((item) => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            quantity: newQuantity,
            total: Number((item.price * newQuantity).toFixed(2)),
          };
          return updatedItem;
        }
        return item;
      })
    );
  };

  // Remove item
  const removeItem = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleDateString() + " " + now.toLocaleTimeString();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">StoreMaster POS</h1>
            <div className="bg-gray-700 px-4 py-2 rounded">
              <span>{storeType} Store</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <span>Cashier: {cashierName}</span>
            <span>{getCurrentDateTime()}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-4 gap-4 overflow-hidden">
        {/* Left Panel - Cart */}
        <div className="flex flex-col bg-white rounded-lg shadow-md w-2/3 overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl text-gray-800">
              Current Sale #{saleNumber}
            </h2>

            {/* Search Bar */}
            <div className="flex mt-3 mb-4 gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-md"
                  placeholder="Search or scan product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={16}
                />
              </div>
              <button className="bg-blue-500 text-white rounded-md px-6 py-2 flex items-center gap-2">
                {/* <Scanner size={16} /> */}
                <span>Scan</span>
              </button>
            </div>

            {/* Cart Header */}
            <div className="grid grid-cols-12 bg-gray-100 py-2 px-3 rounded-t-md text-sm text-gray-500">
              <div className="col-span-5">Item</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-2 text-right">Total</div>
              <div className="col-span-1"></div>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 border-b p-3 items-center"
              >
                <div className="col-span-5">
                  <div className="text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-500">SKU: {item.sku}</div>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <button
                    className="text-gray-600 hover:bg-gray-200 p-1 rounded-md"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2 bg-gray-100 px-3 py-1 rounded">
                    {item.quantity}
                  </span>
                  <button
                    className="text-gray-600 hover:bg-gray-200 p-1 rounded-md"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="col-span-2">{formatCurrency(item.price)}</div>
                <div className="col-span-2 text-right">
                  {formatCurrency(item.total)}
                </div>
                <div className="col-span-1 text-right">
                  <button
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Totals */}
          <div className="p-4 border-t">
            <div className="flex justify-end">
              <div className="w-64">
                <div className="flex justify-between py-1">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Tax ({(taxRate * 100).toFixed(0)}%):</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between py-1 font-bold text-lg">
                  <span>Total:</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            {/* Cart Actions */}
            <div className="flex justify-between mt-4">
              <div className="space-x-2">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
                  Cancel
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md">
                  Hold
                </button>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
                  Discount
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Customer and Payment */}
        <div className="flex flex-col w-1/3 gap-4">
          {/* Customer Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl text-gray-800 mb-3">Customer</h2>

            {/* Customer Search */}
            <div className="flex gap-2 mb-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-md"
                  placeholder="Search customer..."
                />
                <User
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={16}
                />
              </div>
              <button className="bg-blue-500 text-white rounded-md px-3 flex items-center justify-center">
                <UserPlus size={16} />
              </button>
            </div>

            {/* Customer Details */}
            {customer && (
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-bold text-gray-800 mb-2">
                  {customer.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Phone: {customer.phone}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  Email: {customer.email}
                </p>
                <p className="text-sm text-gray-600">
                  Loyalty Points: {customer.loyaltyPoints}
                </p>
              </div>
            )}
          </div>

          {/* Payment Methods Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex-1">
            <h2 className="text-xl text-gray-800 mb-3">Payment Method</h2>

            {/* Payment Options */}
            <div className="space-y-3">
              {(
                ["Cash", "Credit Card", "Mobile Payment"] as PaymentMethod[]
              ).map((method) => (
                <div
                  key={method}
                  className={`flex items-center p-4 rounded-md cursor-pointer ${
                    selectedPaymentMethod === method
                      ? "bg-gray-50 border-2 border-blue-500"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                  onClick={() => setSelectedPaymentMethod(method)}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedPaymentMethod === method
                        ? "border-blue-500"
                        : "border-gray-400"
                    }`}
                  >
                    {selectedPaymentMethod === method && (
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Sale Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-md text-lg font-bold">
            Complete Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingScreen;
