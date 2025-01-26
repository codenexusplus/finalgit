import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TextData from "../../components/TextData";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Header />
      <div>
      <Image src="/assets/imgs/account.png"  layout="responsive"
        width={100}
         height={500} alt="" />
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col m-20">
          <h1>Log in</h1>
          <div className="flex flex-col my-6">
            <label htmlFor="">Username or email address</label>
            <input
              className="h-[40px] w-[250px] border-2 my-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-2 h-[150px]">
            <label htmlFor="">Password</label>
            <input
              className="h-[40px] w-[250px] border-2 my-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="">
            <input className="mr-4" type="checkbox" name="" id="" />
            <span>Remember me</span>
          </div>
          <div className="flex gap-6 items-center">
            <button className="h-[40px] w-[150px] border-2 rounded-md">
              Log In
            </button>
            <span>Lost your password?</span>
          </div>
        </div>

        <div className="flex flex-col m-20">
          <h1>Log in</h1>
          <div className="flex flex-col my-4">
            <label htmlFor=""> email address</label>
            <input
              className="h-[40px] w-[250px] border-2 rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>

          <div className="flex flex-col my-4  text-sm w-[300px]">
            <span>
              A link to set a new password will be sent to your email address.
            </span>
            <p className="mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>
          </div>
          <div className="flex flex-col my-4">
            <div className="flex gap-6 items-center">
              <button className="h-[40px] w-[150px] border-2 rounded-md">
                Register
              </button>
             
            </div>
          </div>
      </div>
        </div>
        <TextData />
        <Footer />
    </div>
  );
};

export default page;
