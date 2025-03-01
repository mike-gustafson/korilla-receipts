import './Receipt.css';

const Receipt = ({ receiptData, payReceipt, refundReceipt }) => {

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
            {!receiptData.paid && <button className="Receipt-pay-button" onClick={payReceipt}>Pay</button>}
            {receiptData.paid && <button className="Receipt-refund-button" onClick={refundReceipt}>Refund</button>}
        </div>
    );
}

export default Receipt;