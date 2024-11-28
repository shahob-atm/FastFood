function Gmail() {
  return (
    <>
      <div className="bg-orange-100">
        <div className="  py-[115px] px-[345px] relative container mx-auto flex items-center pb-20">
          <div className=" bg-cream flex flex-col items-center justify-center">
            <h1 className="text-[16px]  text-customOrange">CONTACT</h1>
            <p className="text-lg mb-8 gmailT">
              Food Stalls with Persons but also specialized equipment, Skills to
              manage.
            </p>
            <div className="flex w-full max-w-md relative">
              <input
                type="text"
                placeholder="Enter your message"
                className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md pr-16 focus:outline-none focus:ring-2"
              />
              <button className="absolute right-0 top-5  transform -translate-y-1/2 px-4 py-[9px] bg-customOrange text-white rounded hover:bg-orange-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gmail;
