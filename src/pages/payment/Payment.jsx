import CheckOutForm from "component/checkoutForm/CheckOutForm.component";
import MainLayout from "layout/mainLayout/main.layout";

function Payment() {
  return (
    <MainLayout>
      <div className="w-11/12 mx-auto py-10">
        <CheckOutForm />
      </div>
    </MainLayout>
  );
}

export default Payment;
