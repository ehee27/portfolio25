import { useState } from "react";
// import { useNavigate } from "react-router-dom";

type PropsType = {
  open: boolean;
  close: () => void;
};

export default function ContactModal({ open, close }: PropsType) {
  //   const navigate = useNavigate();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [comments, setComments] = useState("");
  //
  const inputs = [
    { label: clientName, onChange: setClientName, placeholder: "name" },
    { label: clientEmail, onChange: setClientEmail, placeholder: "email" },
  ];
  //
  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    // setLoading(true)
    setTimeout(() => {
      fetch(
        "https://sd4taic4sd.execute-api.us-west-2.amazonaws.com/send-email",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderName: "scott@skywax.com",
            senderEmail: "scott@skywax.com",
            message: comments,
            clientName: clientName,
            clientEmail: clientEmail,
          }),
        }
      );

      //   setLoading(false)
      //   navigate('/thank-you')
    }, 2000);
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex flex-col p-5 justify-center items-center transition-colors ${
        open ? "visible bg-black/80" : "invisible"
      }`}
    >
      <div
        className={`flex flex-col bg-zinc-800/90 pt-5 transition-all text-zinc-600 w-[90%] md:w-[50%] h-[60%] md:h-[30%] ${
          open ? "scale-100 opacity-100 rounded-xl" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex items-center text-white">
          <div className="w-[20%]"></div>
          <div className="flex justify-center w-[60%]">
            <p className="text-sm md:text-xl font-extrabold font-serif">
              Please complete the form
            </p>
          </div>
          <div className="flex justify-center w-[20%]">
            <button
              onClick={close}
              className="flex justify-center items-center bg-white text-black text-sm font-medium p-3 rounded h-[20px] w-[20px] md:h-[30px] transition-all"
            >
              X
            </button>
          </div>
        </div>

        <div className="flex flex-col w-[100%] text-white gap-2 pt-5">
          <div className="flex justify-center mt-2">
            {" "}
            <form
              onSubmit={() => handleSubmit}
              className="flex flex-col gap-2 md:gap-4 justify-start h-[100%] w-[85%] md:w-[80%] font-sans"
            >
              {/* -------------- Standard Inputs --------------- */}
              {inputs.map((item, i) => (
                <input
                  required
                  key={i}
                  type="text"
                  placeholder={item.placeholder}
                  className="text-sm md:text-md text-black shadow-inner shadow-zinc-300 p-2 md:px-3 rounded-xl"
                  onChange={(e) => item.onChange(e.target.value)}
                />
              ))}

              {/* -------------- Comments --------------- */}
              <textarea
                placeholder="comments"
                className="text-sm md:text-md text-black shadow-inner shadow-zinc-300 rounded-xl p-2 md:px-3"
                onChange={(e) => setComments(e.target.value)}
              ></textarea>

              <div className="flex justify-end">
                <button className="p-3 text-white bg-green-500 w-[100%] md:w-[50%] hover:bg-green-400 hover:scale-105 transition-all text-xl mt-3 rounded-xl">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
