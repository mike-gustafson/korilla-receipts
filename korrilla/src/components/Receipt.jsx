import './Receipt.css';

const Receipt = ({ receiptData }) => {

    return (
        <div className={`Receipt ${receiptData.paid ? "Receipt-paid" : "Receipt-unpaid"}`}>
            <strong>{receiptData.person}</strong>
            <hr></hr>
            <div><span className="Receipt-line-name">Main:</span> {receiptData.order.main}</div>
            <div><span className="Receipt-line-name">Protein:</span> {receiptData.order.protein}</div>
            <div><span className="Receipt-line-name">Rice:</span> {receiptData.order.rice}</div>
            <div><span className="Receipt-line-name">Sauce:</span> {receiptData.order.sauce}</div>
            {/* <div>Toppings: {receiptData.order.toppings.join(", ")}</div> */}
            <div><span className="Receipt-line-name">Drink:</span> {receiptData.order.drink}</div>
            <hr></hr>
            <div><span className="Receipt-line-name">Cost:</span> ${receiptData.order.cost}</div>
            {/* <div>Paid: {receiptData.paid ? "Yes" : "No"}</div> */}
        </div>
    );
}

export default Receipt;