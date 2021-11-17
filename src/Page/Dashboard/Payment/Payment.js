import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Jw9ejAMPhqsbk1Or9AXONt4e8kNg0IKiAUpeaFEics3qOvc7aTDeZlG3tUyONc5wB117ZLIQXUg034f313DWuGb00icEDnJhL')
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://infinite-shore-20557.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))

    }, [appointmentId])
    return (
        <div>
            <h1>Make your payment:{appointment.patientName}for {appointment.serviceName}</h1>
            <h4>Pay:${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}

        </div>
    );
};

export default Payment;