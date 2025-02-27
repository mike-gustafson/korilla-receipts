const Receipt = ({ receiptData }) => {

    return (
        <div>
            <div>Receipt for: {receiptData.person}</div>
            <div>Main: {receiptData.order.main}</div>
            <div>Protein: {receiptData.order.protein}</div>
            <div>Rice: {receiptData.order.rice}</div>
            <div>Sauce: {receiptData.order.sauce}</div>
            <div>Toppings: {receiptData.order.toppings.join(", ")}</div>
            <div>Drink: {receiptData.order.drink}</div>
            <div>Cost: {receiptData.order.cost}</div>
            <div>Paid: {receiptData.paid ? "Yes" : "No"}</div>
        </div>
    );
}

export default Receipt;