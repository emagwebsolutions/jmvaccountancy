import Link from "next/link"


const Componaydetails = ()=>{

    return (
        <>
            <h1 className="font-w-lg font-size-lg">JMV</h1>
            <h1 className="font-w-lg font-size-lg">Accountancy</h1>
            <h1 className="font-w-lg font-size-lg">Solutions Ltd.</h1>
            <span className="divider"></span>
            <p className="font-size-sm">59  Livingstone Road</p>
            <p className="font-size-sm">Thornton Heath</p>
            <p className="font-size-sm">CR7 8JX</p>
            <p className="phone-numb">
                <i className="fa fa-phone fa-lg"></i><span>07951039836</span>
            </p>
            <Link href="#" className="booking-link">BOOK TODAY</Link>
        </>
    )

}

export default Componaydetails