useEffect(() => {
  const storedInvoice = localStorage.getItem("invoice");
  if (storedInvoice) {
    setInvoice(JSON.parse(storedInvoice));
  }
}, []);


useEffect(() => {
  localStorage.setItem("invoice", JSON.stringify(invoice));
}, [invoice]);

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    name,
    amount,
    status,
    date,
  };
  setInvoice([...invoice, formData]);
  console.log(formData);

  // Clear form fields after submission
  setName("");
  setAmount("");
  setStatus("");
  setDate("");
}
useEffect(() => {
  const storedInvoice = localStorage.getItem("invoice");
  if (storedInvoice) {
    setInvoice(JSON.parse(storedInvoice));
  }
}, []);

// Save data to local storage whenever the "invoice" state changes
useEffect(() => {
  localStorage.setItem("invoice", JSON.stringify(invoice));
}, [invoice]);

function handleSubmit(e) {
  e.preventDefault();
  const formData = {
    name,
    amount,
    status,
    date,
  };
  setInvoice([...invoice, formData]);
  console.log(formData);

  // Clear form fields after submission
  setName("");
  setAmount("");
  setStatus("");
  setDate("");
}